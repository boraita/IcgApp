import { Module } from '@nestjs/common';
import { ConnectionGraphqlModule } from './graphql/connectiongraphql.module';
import { UsersDbModule } from './models/users/users.module';
import { ReportsDbModule } from './models/reports/reports.module';

@Module({
	imports: [ConnectionGraphqlModule, UsersDbModule, ReportsDbModule],
	exports: [UsersDbModule],
})
export class DbModule {}
