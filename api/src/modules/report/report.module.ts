import { ReportsDbModule } from '@db/models/reports/reports.module';
import { Module } from '@nestjs/common';
import { UsersDbModule } from '../../db/models/users/users.module';
import { ReportController } from './report.controller';

@Module({
	imports: [ReportsDbModule, UsersDbModule],
	controllers: [ReportController],
})
export class ReportModule {}
