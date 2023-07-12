import { GqlAuthGuard } from '@db/graphql/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../users/user.decorator';
import { Users } from '../users/users.entity';
import { UsersService } from '../users/users.service';
import { CreateReportInput } from './create-report.dto';
import { ReportStatus } from '@shared/enums/reports-status.enum';
import { ReportArgs } from './report-args';
import { Reports } from './reports.entity';
import { ReportsService } from './reports.service';
import { UpdateReportInput } from './update-report';

@Resolver()
export class ReportsResolver {
	constructor(
		private readonly reportService: ReportsService,
		private readonly userService: UsersService
	) {}
	@Query(() => [Reports])
	@UseGuards(GqlAuthGuard)
	public async getReports(
		@Args() reportArgs: ReportArgs,
		@CurrentUser() user: Users
	): Promise<Reports[]> {
		return this.reportService.findAll(reportArgs, user);
	}

	@Query(() => Reports)
	@UseGuards(GqlAuthGuard)
	public async getReport(
		@Args('id') id: string,
		@CurrentUser() user: Users
	): Promise<Reports> {
		return this.reportService.findOne(id, user);
	}

	@Mutation(() => Reports)
	@UseGuards(GqlAuthGuard)
	public async createReport(
		@Args('createReportInput') createReportInput: CreateReportInput,
		@CurrentUser() user: Users
	): Promise<Reports> {
		const backupPeople: Users[] = await this.userService.findAllById(
			createReportInput.idsBackupPeople
		);
		createReportInput = { ...createReportInput, backupPeople };
		return await this.reportService.create(createReportInput, user);
	}

	@Mutation(() => Reports)
	public async updateReport(
		@Args('id') id: string,
		@Args('updateReportInput') updateReportInput: UpdateReportInput,
		@CurrentUser() user: Users
	): Promise<Reports> {
		updateReportInput = { ...updateReportInput, updated_date: new Date() };
		return this.reportService.update(id, updateReportInput, user);
	}

	@Mutation(() => Reports)
	public async removeReport(
		@Args('id') id: string,
		@CurrentUser() user: Users
	): Promise<any> {
		return this.reportService.update(
			id,
			{ status: ReportStatus.deleted },
			user
		);
	}
}
