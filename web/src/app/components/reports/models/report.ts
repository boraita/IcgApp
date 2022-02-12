import { User } from '@shared/models/user';
import { ReportType } from '@app/shared/enums/report-type.enum';
export interface Report {
  id: number;
  createdBy: User;
  type: ReportType;
  backupPeople: User[];
  description: string;
  status: string;
  date: Date;
  createdDate: Date;
  text: string;
}
