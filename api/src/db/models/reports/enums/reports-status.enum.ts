import { registerEnumType } from '@nestjs/graphql';

export enum ReportStatus {
	done = 'Done',
	deleted = 'Deleted',
	working = 'Working',
}

registerEnumType(ReportStatus, { name: 'ReportStatus' });
