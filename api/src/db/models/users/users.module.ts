import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
	imports: [TypeOrmModule.forFeature([Users])],
	providers: [UsersService, UsersResolver],
	exports: [UsersResolver],
})
export class UsersDbModule {}
