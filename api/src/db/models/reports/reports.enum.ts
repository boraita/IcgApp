import { registerEnumType } from '@nestjs/graphql';

export enum ReportStatus {
	DONE = 'DONE',
	DELETED = 'DELETED',
	WORKING = 'WORKING',
}

registerEnumType(ReportStatus, { name: 'ReportStatus' });
