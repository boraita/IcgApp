/*
https://docs.nestjs.com/modules
*/
import { Module } from '@nestjs/common';
import { AreaController } from './area.controller';

@Module({
	imports: [],
	controllers: [AreaController],
})
export class AreaModule {}
