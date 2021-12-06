import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ReportService } from './report.service';

@Controller()
export class ReportController {
	constructor(private readonly service: ReportService) {}

	@Get('v1/reports')
	@UseGuards(AuthGuard('jwt'))
	getReports() {
		return this.service.getReports();
	}
}
