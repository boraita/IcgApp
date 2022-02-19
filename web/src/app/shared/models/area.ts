import { ReportType } from '@shared/enums/report-type.enum';

export interface Area {
  id: number;
  name: ReportType;
  description?: string;
  note?: string;
}
