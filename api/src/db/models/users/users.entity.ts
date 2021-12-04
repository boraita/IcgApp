import { Field, ID, ObjectType } from '@nestjs/graphql';
import * as bcrypt from 'bcrypt';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
	role: number;

	async validatePassword(password: string): Promise<boolean> {
		return await bcrypt.compareSync(password, this.password);
	}
}
