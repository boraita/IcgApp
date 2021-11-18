import { DbModule } from './db/db.module';
import { Module } from '@nestjs/common';
import { AreaModule } from './modules/area/area.module';
import { ReportModule } from './modules/report/report.module';
import { ConfigModule } from '@nestjs/config';

@Module({
	imports: [ConfigModule.forRoot(), DbModule, AreaModule, ReportModule],
})
export class AppModule {}
