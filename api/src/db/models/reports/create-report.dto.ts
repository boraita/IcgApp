import { Field, InputType } from '@nestjs/graphql';
import { IsDate, IsNumber, IsString, IsBoolean } from 'class-validator';
import { ReportType } from './reports.enum';

@InputType()
export class CreateReportInput {
	@Field()
	@IsNumber()
	readonly report_id: number;

	@Field()
	@IsString()
	readonly report_type: ReportType;

	@Field()
	@IsString()
	readonly report_description: string;

	@Field()
	@IsString()
	readonly report_data: string;

	@Field()
	@IsDate()
	readonly report_date: Date;

	@Field()
	@IsString()
	readonly report_status: string;

	@Field()
	@IsString()
	readonly report_created_by: string;

	@Field()
	@IsDate()
	readonly report_created_date: Date;

	@Field()
	@IsDate()
	readonly report_updated_date: Date;

	@Field()
	@IsBoolean()
	readonly is_deleted: boolean;
}
