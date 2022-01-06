import { Field, InputType } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { ReportType } from './reports.enum';

@InputType()
export class CreateReportTypeInput {
	@Field()
	@Column()
	type: ReportType;

	@Field()
	@Column()
	description: string;
}
