import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from '@shared/enums/roles.enum';
import * as bcrypt from 'bcrypt';
import { In, Repository } from 'typeorm';
import { Reports } from '../reports/reports.entity';
import { CreateUserInput } from './create-user.dto';
import { UpdateUserInput } from './update-user';
import { UsersArgs } from './user-args';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
	constructor(
		@InjectRepository(Users)
		private readonly usersRepository: Repository<Users>
	) {}

	public async findAll(usersArgs: UsersArgs, user: Users): Promise<Users[]> {
		const { limit, offset } = usersArgs;
		return this.usersRepository
			.find({
				skip: offset,
				take: limit,
			})
			.then((users) => users.filter((u) => u.id !== user.id));
	}

	public async findAllById(ids: string[]): Promise<Users[]> {
		return this.usersRepository.find({
			where: { id: In(ids) },
		});
	}

	public async findAllToAwareNewReport(report: Reports): Promise<Users[]> {
		return this.usersRepository.find({
			where: [
				{ collaboratorArea: report.type, roles: Role.Collaborator },
				{ roles: Role.Admin },
			],
		});
	}

	public async findOneById(id: string): Promise<Users> {
		const user = await this.usersRepository.findOne(id);

		if (!user) {
			throw new NotFoundException(`User #${id} not found`);
		}
		return user;
	}

	public async create(createUserInput: CreateUserInput): Promise<Users> {
		createUserInput.password = bcrypt.hashSync(createUserInput.password, 8);

		const user = this.usersRepository.create({ ...createUserInput });
		return this.usersRepository.save(user);
	}

	public async update(
		id: string,
		updateUserInput: UpdateUserInput
	): Promise<Users> {
		updateUserInput.password = bcrypt.hashSync(updateUserInput.password, 8);

		const user = await this.usersRepository.preload({
			id: id,
			...updateUserInput,
		});

		if (!user) {
			throw new NotFoundException(`User #${id} not found`);
		}
		return this.usersRepository.save(user);
	}

	public async remove(id: string): Promise<any> {
		const user = await this.findOneById(id);
		return this.usersRepository.remove(user);
	}
	public async getUserByName(username: string): Promise<Users> {
		return this.usersRepository.findOne({ username });
	}
}
