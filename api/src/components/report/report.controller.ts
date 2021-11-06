import { Controller, Get } from '@nestjs/common';
import { ReportService } from './report.service';

@Controller()
export class ReportController {
  constructor(private readonly service: ReportService) { }

  @Get('v1/report/all')
  getReports() {
    return this.service.getReports();
  }
}
