import { Field, ID, ObjectType } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import {
	Column,
	Entity,
	ManyToMany,
	OneToOne,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Reports } from '../reports/reports.entity';

@Entity()
@ObjectType()
export class Users {
	@Field(() => ID)
	@PrimaryGeneratedColumn()
	id: string;

	@Field()
	@Column()
	name: string;

	@Field()
	@Column()
	username: string;

	@Field()
	@Column({ length: 60 })
	password: string;

	@Field()
	@Column()
	roles: string;

	@OneToOne(() => Reports, (report) => report.createdBy)
	userReport: Reports;

	@Field(() => [Reports], { nullable: true })
	@ManyToMany(() => Reports, (report) => report.backupPeople)
	backupreportPeople: [Reports];

	async validatePassword(password: string): Promise<boolean> {
		return await bcrypt.compareSync(password, this.password);
	}
}
