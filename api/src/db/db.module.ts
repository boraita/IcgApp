import { Module } from '@nestjs/common';
import { ConnectionGraphqlModule } from './graphql/connectiongraphql.module';
import { UsersModule } from './models/users/users.module';

@Module({
	imports: [ConnectionGraphqlModule, UsersModule],
})
export class DbModule {}
