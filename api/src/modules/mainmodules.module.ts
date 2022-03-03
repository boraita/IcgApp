import { Module } from '@nestjs/common';
import { AreaModule } from './area/area.module';
import { MailModule } from './mail/mail.module';
import { ReportModule } from './report/report.module';
import { UsersModule } from './users/users.module';

@Module({
	imports: [UsersModule, ReportModule, AreaModule, MailModule],
})
export class MainModulesModule {}
