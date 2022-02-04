import { GqlAuthGuard } from '@db/graphql/gql-auth.guard';
import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserInput } from './create-user.dto';
import { UpdateUserInput } from './update-user';
import { UsersArgs } from './user-args';
import { Users } from './users.entity';
import { UsersService } from './users.service';
import { CurrentUser } from './user.decorator';

@Resolver()
export class UsersResolver {
	constructor(private readonly usersService: UsersService) {}

	@Query(() => [Users])
	public async users(@Args() usersArgs: UsersArgs): Promise<Users[]> {
		return this.usersService.findAll(usersArgs);
	}

	@Query(() => Users)
	@UseGuards(GqlAuthGuard)
	public async user(@Args('id') id: string): Promise<Users> {
		const user = await this.usersService.findOneById(id);
		if (!user) {
			throw new NotFoundException(id);
		}
		return user;
	}

	@Mutation(() => Users)
	public async createUser(
		@Args('createUserInput') createUserInput: CreateUserInput
	): Promise<Users> {
		return await this.usersService.create(createUserInput);
	}

	@Mutation(() => Users)
	public async updateUser(
		@Args('id') id: string,
		@Args('updateUserInput') updateUserInput: UpdateUserInput
	): Promise<Users> {
		return await this.usersService.update(id, updateUserInput);
	}

	@Mutation(() => Users)
	public async removeUser(@Args('id') id: string): Promise<any> {
		return this.usersService.remove(id);
	}

	@Query(() => Users)
	@UseGuards(GqlAuthGuard)
	whoami(@CurrentUser() user: Users) {
		return this.usersService.getUserByName(user.username);
	}
}
