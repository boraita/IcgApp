import { GqlAuthGuard } from '@db/graphql/gql-auth.guard';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateReportInput } from './create-report.dto';
import { ReportArgs } from './report-args';
import { Reports } from './reports.entity';
import { ReportsService } from './reports.service';
import { UpdateReportInput } from './update-report';

@Resolver()
export class ReportsResolver {
	constructor(private readonly reportService: ReportsService) {}
	@Query(() => [Reports])
	@UseGuards(GqlAuthGuard)
	public async getReports(@Args() reportArgs: ReportArgs): Promise<Reports[]> {
		return await this.reportService.findAll(reportArgs);
	}

	@Mutation(() => Reports)
	@UseGuards(GqlAuthGuard)
	public async createReport(
		@Args('createReportInput') createReportInput: CreateReportInput
	): Promise<Reports> {
		return await this.reportService.create(createReportInput);
	}

	@Mutation(() => Reports)
	public async updateReport(
		@Args('id') id: string,
		@Args('updateReportInput') updateReportInput: UpdateReportInput
	): Promise<any> {
		return this.reportService.update(id, updateReportInput);
	}
	@Mutation(() => Reports)
	public async removeReport(@Args('id') id: string): Promise<any> {
		return this.reportService.update(id, { is_deleted: true });
	}
}
