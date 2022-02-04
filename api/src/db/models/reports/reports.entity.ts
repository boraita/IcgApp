import { Field, ID, ObjectType } from '@nestjs/graphql';
import {
	Column,
	CreateDateColumn,
	Entity,
	JoinColumn,
	JoinTable,
	ManyToMany,
	ManyToOne,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Users } from '../users/users.entity';
import { ReportsType } from './report-type.entity';

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

	@Field()
	@OneToOne(() => ReportsType)
	@JoinColumn()
	typing: ReportsType;

	@Field()
	@Column()
	description: String;

	@Field(() => [Users], { nullable: true })
	@ManyToMany(() => Users, (users) => users.backupreportPeople)
	@JoinTable()
	backupPeople: Users[] | null;

	@Field()
	@Column()
	text: string;

	@Field()
	@Column()
	date: Date;

	@Field()
	@Column()
	status: string;

	@Field()
	@CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
	created_date: Date;

	@Field()
	@CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
	updated_date: Date;
}
