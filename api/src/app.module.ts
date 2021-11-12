import { Module } from '@nestjs/common';
import { ReportModule } from './components/report/report.module';

@Module({
  imports: [ReportModule]
})
export class AppModule { }
