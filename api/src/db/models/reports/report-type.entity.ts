import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, PrimaryGeneratedColumn, Entity, OneToOne } from 'typeorm';
import { ReportType } from './reports.enum';
import { Reports } from './reports.entity';

@Entity()
@ObjectType()
export class ReportsType {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: string;

	@Field()
	@Column({ type: 'enum', enum: ReportType, nullable: true })
	type: ReportType;

	@Field()
	@Column()
	description: string;

	@OneToOne(() => Reports, (report) => report.typing)
	report: Reports;

	typing: any;
}
