import { GqlAuthGuard } from '@db/graphql/gql-auth.guard';
import { Roles } from '@modules/roles/roles.decorator';
import { RolesGuard } from '@modules/roles/roles.guard';
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Role } from '@shared/enums/roles.enum';
import { CreateReportsTypeInput } from './create-reports-type.dto';
import { ReportsType } from './reports-type.entity';
import { ReportsTypeService } from './reports-type.service';
import { UpdateReportsTypeInput } from './update-reports-type.dto';

@Resolver()
export class ReportsTypeResolver {
	constructor(private readonly reportsTypeService: ReportsTypeService) {}

	@Query(() => ReportsType)
	@UseGuards(GqlAuthGuard)
	public async getReportsType(@Args('id') id: string): Promise<ReportsType> {
		return await this.reportsTypeService.findOne(id);
	}

	@Query(() => [ReportsType])
	@UseGuards(GqlAuthGuard)
	public async getAllReportsTypes(): Promise<ReportsType[]> {
		return await this.reportsTypeService.findAll();
	}

	@Mutation(() => ReportsType)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@Roles(Role.Admin)
	public async createReportsType(
		@Args('reportsType') reportType: CreateReportsTypeInput
	) {
		return await this.reportsTypeService.create(reportType);
	}

	@Mutation(() => ReportsType)
	@UseGuards(GqlAuthGuard, RolesGuard)
	@Roles(Role.Admin)
	public async updateReportsType(
		@Args('id') id: string,
		@Args('updateReportsType')
		updateReportsType: UpdateReportsTypeInput
	): Promise<any> {
		return this.reportsTypeService.update(id, updateReportsType);
	}
}
