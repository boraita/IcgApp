import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsDate, IsString } from 'class-validator';
import { Users } from '../users/users.entity';

@InputType()
export class CreateReportInput {
	@Field()
	@IsString()
	description: String;

	@Field(() => [String], { nullable: true })
	@IsArray()
	idsBackupPeople: string[] | null;

	backupPeople: Users[] | null;

	@Field()
	@IsString()
	text: string;

	@Field()
	@IsDate()
	date: Date;

	@Field()
	@IsString()
	status: string;

	createdBy: Users;
}
