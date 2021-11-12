import { Module } from '@nestjs/common';
import { ReportModule } from './components/report/report.module';
import { AreaModule } from './components/area/area.module';

@Module({
	imports: [AreaModule, ReportModule],
})
export class AppModule {}
