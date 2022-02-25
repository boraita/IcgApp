import { Users } from '@db/models/users/users.entity';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '@shared/enums/roles.enum';
import { CreateReportInput } from './create-report.dto';
import { ReportArgs } from './report-args';
import { Reports } from './reports.entity';
import { ReportStatus } from '@shared/enums/reports-status.enum';
import { UpdateReportInput } from './update-report';

@Injectable()
export class ReportsService {
	constructor(
		@InjectRepository(Reports)
		private readonly reportsRepository: Repository<Reports>
	) {}

	public async findAll(
		reportArgs: ReportArgs,
		user: Users
	): Promise<Reports[]> {
		const { limit, offset } = reportArgs;
		let parameters = {
			skip: offset,
			take: limit,
			relations: ['createdBy', 'backupPeople'],
		};
		switch (user.roles) {
			case Role.Collaborator:
				parameters = {
					...parameters,
					...{
						where: [{ createdBy: user }, { type: user.collaboratorArea }],
					},
				};
				break;
			case Role.User:
				parameters = {
					...parameters,
					...{ where: { createdBy: user } },
				};
				break;
		}
		return this.reportsRepository.find(parameters);
	}

	public async findOne(id: string, user: Users): Promise<Reports> {
		const report = await this.reportsRepository.findOne(id, {
			relations: ['createdBy', 'backupPeople'],
		});
		if (!report) {
			throw new NotFoundException(`Report #${id} not found`);
		} else if (
			report.createdBy === user ||
			user.roles === Role.Admin ||
			(user.roles === Role.Collaborator &&
				user.collaboratorArea === report.type &&
				report.status !== ReportStatus.deleted)
		) {
			return report;
		} else {
			throw new Error('You are not allowed to update this report');
		}
	}

	public async create(
		createReportInput: CreateReportInput,
		user: Users
	): Promise<Reports> {
		createReportInput = {
			...createReportInput,
			createdBy: user,
			status: ReportStatus.done,
		};
		return this.reportsRepository.save(createReportInput);
	}

	public async update(
		id: string,
		updateReportInput: UpdateReportInput,
		user: Users
	): Promise<Reports> {
		const report = await this.reportsRepository.preload({
			id,
			...updateReportInput,
		});
		if (!report) {
			throw new NotFoundException(`Report #${id} not found`);
		}
		if (user !== report.createdBy) {
			throw new Error('You are not allowed to update this report');
		}

		return this.reportsRepository.save(updateReportInput);
	}
}
