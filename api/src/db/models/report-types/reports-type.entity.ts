import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Area } from '@shared/enums/areas.enum';

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

	@Field(() => [String])
	@Column({ type: 'simple-array', nullable: true })
	describedPoints: String[];

	typing: any;
}
