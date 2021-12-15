import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reports } from './reports.entity';
import { ReportsService } from './reports.service';
import { ReportsResolver } from './reports.resolver';

@Module({
	imports: [TypeOrmModule.forFeature([Reports])],
	providers: [ReportsService, ReportsResolver],
	exports: [ReportsService, ReportsResolver],
})
export class ReportsDbModule {}
