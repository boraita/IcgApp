import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsType } from './report-type.entity';
import { Reports } from './reports.entity';
import { ReportsResolver } from './reports.resolver';
import { ReportsService } from './reports.service';
import { UsersDbModule } from '../users/users.module';

@Module({
	imports: [TypeOrmModule.forFeature([Reports, ReportsType]), UsersDbModule],
	providers: [ReportsService, ReportsResolver],
	exports: [ReportsService, ReportsResolver],
})
export class ReportsDbModule {}
