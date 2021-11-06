import { ReportController } from './report.controller';
import { ReportService } from './report.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
