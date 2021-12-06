import { Module } from '@nestjs/common';
import { registreredPassportModule } from '@shared/config';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
	imports: [registreredPassportModule],
	controllers: [ReportController],
	providers: [ReportService],
})
export class ReportModule {}
