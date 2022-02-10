import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsDate, IsString } from 'class-validator';
import { Users } from '../users/users.entity';
import { Area } from '@db/models/users/enums/areas.enum';
import { ReportStatus } from './enums/reports-status.enum';

@InputType()
export class CreateReportInput {
	@Field()
	@IsString()
	description: String;

	@Field(() => [String], { nullable: true })
	@IsArray()
	idsBackupPeople: string[];

	backupPeople: Users[] | null;

	@Field()
	@IsString()
	text: string;

	@Field()
	@IsDate()
	date: Date;

	@Field()
	@IsString()
	status: ReportStatus;

	@Field()
	@IsString()
	type: Area;

	createdBy: Users;
}
