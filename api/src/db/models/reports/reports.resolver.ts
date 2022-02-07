import { GqlAuthGuard } from '@db/graphql/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CurrentUser } from '../users/user.decorator';
import { Users } from '../users/users.entity';
import { CreateReportInput } from './create-report.dto';
import { ReportArgs } from './report-args';
import { Reports } from './reports.entity';
import { ReportStatus } from './reports.enum';
import { ReportsService } from './reports.service';
import { UpdateReportInput } from './update-report';

@Resolver()
export class ReportsResolver {
	constructor(private readonly reportService: ReportsService) {}
	@Query(() => [Reports])
	@UseGuards(GqlAuthGuard)
	public async getReports(
		@Args() reportArgs: ReportArgs,
		@CurrentUser() user: Users
	): Promise<Reports[]> {
		return await this.reportService.findAll(reportArgs, user);
	}

	@Mutation(() => Reports)
	@UseGuards(GqlAuthGuard)
	public async createReport(
		@Args('createReportInput') createReportInput: CreateReportInput,
		@CurrentUser() user: Users
	): Promise<Reports> {
		return await this.reportService.create(createReportInput, user);
	}

	@Mutation(() => Reports)
	public async updateReport(
		@Args('id') id: string,
		@Args('updateReportInput') updateReportInput: UpdateReportInput,
		@CurrentUser() user: Users
	): Promise<any> {
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
			{ status: ReportStatus.DELETED },
			user
		);
	}
}
