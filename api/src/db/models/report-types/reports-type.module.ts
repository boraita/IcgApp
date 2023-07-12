/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportsType } from './reports-type.entity';
import { ReportsTypeResolver } from './reports-type.resolver';
import { ReportsTypeService } from './reports-type.service';

@Module({
	imports: [TypeOrmModule.forFeature([ReportsType])],
	providers: [ReportsTypeService, ReportsTypeResolver],
	exports: [ReportsTypeService, ReportsTypeResolver],
})
export class ReportsTypeModule {}
