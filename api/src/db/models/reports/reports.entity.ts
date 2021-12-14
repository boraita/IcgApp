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
	type: ReportType;

	@Field()
	@Column()
	description: string;

	@Field()
	@Column()
	data: string;

	@Field()
	@Column()
	date: Date;

	@Field()
	@Column()
	status: string;

	@Field()
	@Column()
	created_by: string;

	@Field()
	@Column()
	created_date: Date;

	@Field()
	@Column()
	updated_date: Date;
}
