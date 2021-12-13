import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ReportType } from './reports.enum';

@Entity()
@ObjectType()
export class Reports {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: string;

	@Field()
	@Column()
	report_id: number;

	@Field()
	@Column()
	report_type: ReportType;

	@Field()
	@Column()
	report_description: string;

	@Field()
	@Column()
	report_data: string;

	@Field()
	@Column()
	report_date: Date;

	@Field()
	@Column()
	report_status: string;

	@Field()
	@Column()
	report_created_by: string;

	@Field()
	@Column()
	report_created_date: Date;

	@Field()
	@Column()
	report_updated_date: Date;

	@Field()
	@Column()
	is_deleted: boolean;
}
