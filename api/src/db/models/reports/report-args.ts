import { ArgsType, Field, Int } from '@nestjs/graphql';
import { Max, Min, IsString, IsInt } from 'class-validator';

@ArgsType()
export class ReportArgs {
	@Field(() => Int)
	@Min(0)
	offset = 0;

	@Field(() => Int)
	@Min(1)
	@Max(50)
	limit = 25;

	@Field(() => Int, { nullable: true })
	@IsInt()
	createdBy = -1;
}
