import { ReportsDbModule } from '@db/models/reports/reports.module';
import { Module } from '@nestjs/common';
import { ReportController } from './report.controller';

@Module({
	imports: [ReportsDbModule],
	controllers: [ReportController],
})
export class ReportModule {}
