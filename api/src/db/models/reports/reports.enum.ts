import { registerEnumType } from '@nestjs/graphql';

export enum ReportType {
	ALL = 'ALL',
	KIDS = 'KIDS',
	MULTIMEDIA = 'MULTIMEDIA',
	PRAISE = 'PRAISE',
	TEENYEARS = 'TEENYEARS',
}

export enum ReportStatus {
	DONE = 'DONE',
	DELETED = 'DELETED',
	WORKING = 'WORKING',
}

registerEnumType(ReportType, { name: 'ReportType' });
registerEnumType(ReportStatus, { name: 'ReportStatus' });
