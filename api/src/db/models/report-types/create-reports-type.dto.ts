import { Field, InputType } from '@nestjs/graphql';
import { Area } from '@shared/enums/areas.enum';
import { IsArray, IsString } from 'class-validator';

@InputType()
export class CreateReportsTypeInput {
	@Field()
	@IsString()
	readonly type: Area;

	@Field(() => [String], { nullable: true })
	@IsArray()
	readonly describedPoints: string[];

	@Field()
	@IsString()
	readonly description: string;
}
