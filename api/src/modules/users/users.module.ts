import { UsersDbModule } from '@db/models/users/users.module';
import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
	imports: [UsersDbModule],
	controllers: [UsersController],
})
export class UsersModule {}
