import { ReportArgs } from '@db/models/reports/report-args';
import { ReportType } from '@db/models/reports/reports.enum';
import { ReportsService } from '@db/models/reports/reports.service';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/auth.guard';

@Controller()
export class ReportController {
	constructor(private readonly service: ReportsService) {}
	@UseGuards(JwtAuthGuard)
	@Get('v1/reports')
	getReports() {
		// return this.service.findAll({
		// 	offset: 0,
		// 	limit: 50,
		// 	area: ReportType.ALL,
		// } as ReportArgs);
	}
}
