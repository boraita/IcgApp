import { Field, InputType } from '@nestjs/graphql';
import { Role } from '@shared/enums/roles.enum';
import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

@InputType()
export class CreateUserInput {
	@Field()
	@IsString()
	readonly name: string;

	@Field()
	@IsString()
	@MaxLength(40)
	readonly username: string;

	@Field()
	@IsNotEmpty()
	@IsString()
	@MaxLength(60)
	password: string;

	@Field()
	@IsNotEmpty()
	@IsString()
	roles: Role;
}
