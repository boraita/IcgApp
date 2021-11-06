import { ReportModule } from './components/report/report.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ReportModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
