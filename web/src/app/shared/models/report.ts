import { ReportType } from '../enums/report-type.enum';
import { ReportStatus } from '../enums/report-status.enum';
import { User } from './user';

export interface Report {
  id: string;
  createdBy: User;
  type: ReportType;
  description: string;
  idsBackupPeople: number[];
  text: string;
  date: Date;
  status: ReportStatus;
}
