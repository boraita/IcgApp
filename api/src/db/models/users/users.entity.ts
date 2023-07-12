import { Field, ID, ObjectType } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import {
	Column,
	Entity,
	ManyToMany,
	OneToMany,
	PrimaryGeneratedColumn,
} from 'typeorm';
import { Reports } from '../reports/reports.entity';
import { Area } from '@shared/enums/areas.enum';
import { Role } from '@shared/enums/roles.enum';

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
	@Column({ length: 90, nullable: true })
	password: string;

	@Field(() => Role)
	@Column({ type: 'enum', enum: Role, nullable: true })
	roles: Role;

	@Field(() => Area, { nullable: true })
	@Column({ type: 'enum', enum: Area, nullable: true })
	collaboratorArea: Area;

	@OneToMany(() => Reports, (report) => report.createdBy)
	userReport: Reports;

	@Field(() => [Reports], { nullable: true })
	@ManyToMany(() => Reports, (report) => report.backupPeople)
	backupReportPeople: [Reports];

	async validatePassword(password: string): Promise<boolean> {
		return await bcrypt.compareSync(password, this.password);
	}
}
