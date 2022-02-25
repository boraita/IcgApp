import { InputType, PartialType } from '@nestjs/graphql';
import { CreateReportsTypeInput } from './create-reports-type.dto';

@InputType()
export class UpdateReportsTypeInput extends PartialType(
	CreateReportsTypeInput
) {}
