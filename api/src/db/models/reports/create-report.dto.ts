import { Field, InputType } from '@nestjs/graphql';
import { IsArray, IsDate, IsString } from 'class-validator';
import { CreateUserInput } from '../users/create-user.dto';
import { CreateReportTypeInput } from './create-report-type.dto';

@InputType()
export class CreateReportInput {
	@Field(() => CreateUserInput)
	readonly userId: CreateUserInput;

	@Field(() => CreateReportTypeInput)
	readonly typing: CreateReportTypeInput;

	@Field()
	@IsString()
	readonly description: string;

	@Field(() => [CreateUserInput])
	@IsArray()
	backupPeople: CreateUserInput[];

	@Field()
	@IsString()
	text: string;

	@Field()
	@IsDate()
	date: Date;

	@Field()
	@IsString()
	status: string;

	@Field()
	@IsDate()
	created_date: Date;

	@Field()
	@IsDate()
	updated_date: Date;
}
