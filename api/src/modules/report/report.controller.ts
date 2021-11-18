import { Controller, Get } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller()
export class ReportController {
  constructor(private readonly service: ReportService) { }

  @Get('v1/reports')
  getReports() {
    return this.service.getReports();
  }
}
