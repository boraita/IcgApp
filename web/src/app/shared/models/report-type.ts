export interface ReportType {
  id: string;
  type: AreaType;
  description: string;
  describedPoints: String[];
}

export enum AreaType {
  Kids = 'Kids',
  Multimedia = 'Multimedia',
  Youngs = 'Jovenes',
  Prise = 'Alabanza',
}
