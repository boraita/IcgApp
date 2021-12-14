import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNumber, IsString, IsBoolean } from 'class-validator';
import { ReportType } from './reports.enum';

@InputType()
export class CreateReportInput {
	@Field()
	@IsString()
	readonly type: ReportType;

	@Field()
	@IsString()
	readonly description: string;

	@Field()
	@IsString()
	readonly data: string;

	@Field()
	@IsDate()
	readonly date: Date;

	@Field()
	@IsString()
	readonly status: string;

	@Field()
	@IsString()
	readonly created_by: string;

	@Field()
	@IsDate()
	readonly created_date: Date;

	@Field()
	@IsDate()
	readonly updated_date: Date;
}
