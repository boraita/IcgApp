import { Injectable } from '@nestjs/common';
import { Report } from './models/report';

@Injectable()
export class ReportService {
  getReports(): Report[] {
    return [{ area: 2, text: 'Elena lo ha hecho realmente mal', userId: 'Rosa' }];
  }
}
