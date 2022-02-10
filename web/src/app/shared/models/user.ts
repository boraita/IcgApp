import { ReportType } from '../enums/report-type.enum';
import { Role } from '../enums/role.enum';

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  roles: Role[];
  collaboratorArea: ReportType;
}
