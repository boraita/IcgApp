import { Field, InputType } from '@nestjs/graphql';
import { Column } from 'typeorm';
import { Area } from '../users/enums/areas.enum';

@InputType()
export class CreateReportTypeInput {
	@Field()
	@Column({ type: 'enum', enum: Area, nullable: true })
	type: Area;

	@Field()
	@Column()
	description: string;
}
