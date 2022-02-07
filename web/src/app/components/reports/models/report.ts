import { User } from '../../../shared/models/user';
import { ReportType } from './report-type';
export interface Report {
  id: number;
  createdBy: User;
  typing: ReportType;
  backup: User[];
  description: string;
  status: string;
  date: Date;
  createdDate: Date;
  text: string;
}
