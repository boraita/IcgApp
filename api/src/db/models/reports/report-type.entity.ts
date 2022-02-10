import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Area } from '../users/enums/areas.enum';

@Entity()
@ObjectType()
export class ReportsType {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: string;

	@Field()
	@Column({ type: 'enum', enum: Area, nullable: true })
	type: Area;

	@Field()
	@Column()
	description: string;

	typing: any;
}
