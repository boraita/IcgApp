import { Field, InputType, PartialType } from '@nestjs/graphql';
import { IsDate } from 'class-validator';
import { CreateReportInput } from './create-report.dto';

@InputType()
export class UpdateReportInput extends PartialType(CreateReportInput) {
	@Field()
	@IsDate()
	updated_date?: Date;
}
