import { ReportStatus } from '../enums/report-status.enum';
import { AreaType } from './report-type';
import { User } from './user';

export interface Report extends ReportBasic {
  idsBackupPeople: number[];
  text: string;
  backupPeople: User[];
  created_date: Date;
}

export interface ReportBasic {
  id: string;
  createdBy: User;
  type: AreaType;
  description: string;
  date: Date;
  status: ReportStatus;
}
