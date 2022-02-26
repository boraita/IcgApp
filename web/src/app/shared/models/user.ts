import { Role } from '../enums/role.enum';
import { AreaType } from './report-type';

export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  roles: Role[];
  collaboratorArea: AreaType;
}
