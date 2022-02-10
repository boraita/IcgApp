import { ReportsDbModule } from '@db/models/reports/reports.module';
import { Module } from '@nestjs/common';

@Module({
	imports: [ReportsDbModule],
})
export class ReportModule {}
