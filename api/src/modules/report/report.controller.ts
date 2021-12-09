import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ReportService } from './report.service';
import { JwtAuthGuard } from '../auth/auth.guard';

@Controller()
export class ReportController {
	constructor(private readonly service: ReportService) {}
	@UseGuards(JwtAuthGuard)
	@Get('v1/reports')
	getReports() {
		return this.service.getReports();
	}
}
