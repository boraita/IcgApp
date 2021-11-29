import { UsersController } from './users.controller';
import { Module } from '@nestjs/common';
import { UsersDbModule } from '../../db/models/users/users.module';

@Module({
	imports: [UsersDbModule],
	controllers: [UsersController],
})
export class UsersModule {}
