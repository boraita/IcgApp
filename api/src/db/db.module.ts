import { Module } from '@nestjs/common';
import { ConnectionGraphqlModule } from './graphql/connectiongraphql.module';
import { UsersDbModule } from './models/users/users.module';

@Module({
	imports: [ConnectionGraphqlModule, UsersDbModule],
})
export class DbModule {}
