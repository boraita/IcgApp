import { InputType, PartialType } from '@nestjs/graphql';
import { CreateReportInput } from './create-report.dto';

@InputType()
export class UpdateReportInput extends PartialType(CreateReportInput) {}
