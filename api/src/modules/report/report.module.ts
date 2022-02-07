import { ReportsDbModule } from '@db/models/reports/reports.module';
import { UsersDbModule } from '@db/models/users/users.module';
import { Module } from '@nestjs/common';

@Module({
	imports: [ReportsDbModule, UsersDbModule],
})
export class ReportModule {}
