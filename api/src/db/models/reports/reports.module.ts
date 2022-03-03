import { MailService } from '@modules/mail/mail.service';
import { MailerModule } from '@nestjs-modules/mailer';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersDbModule } from '../users/users.module';
import { Reports } from './reports.entity';
import { ReportsResolver } from './reports.resolver';
import { ReportsService } from './reports.service';

@Module({
	imports: [TypeOrmModule.forFeature([Reports]), UsersDbModule, MailerModule],
	providers: [ReportsService, ReportsResolver, MailService],
	exports: [ReportsService, ReportsResolver],
})
export class ReportsDbModule {}
