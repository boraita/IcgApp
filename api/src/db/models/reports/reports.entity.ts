import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { Area } from '@db/models/users/enums/areas.enum';
import { ReportStatus } from './enums/reports-status.enum';

@Entity()
@ObjectType()
export class Reports {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: string;

	@Field(() => Users)
	@ManyToOne(() => Users, (user) => user.userReport)
	@JoinColumn()
	createdBy: Users;

	@Field(() => Area)
	@Column({ type: 'enum', enum: Area })
	type: Area;

	@Field()
	@Column()
	description: String;

	@Field(() => [Users], { nullable: true })
	@ManyToMany(() => Users, (users) => users.backupReportPeople)
	@JoinTable()
	backupPeople: Users[] | null;

	@Field()
	@Column()
	text: string;

	@Field()
	@Column()
	date: Date;

	@Field()
	@Column({ type: 'enum', enum: ReportStatus, default: ReportStatus.working })
	status: ReportStatus;

	@Field()
	@CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
	created_date: Date;

	@Field()
	@CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
	updated_date: Date;
}
