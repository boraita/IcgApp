import { UsersDbModule } from '@db/models/users/users.module';
import { Module } from '@nestjs/common';

@Module({
	imports: [UsersDbModule],
})
export class UsersModule {}
