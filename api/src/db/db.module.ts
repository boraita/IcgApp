import { Module } from '@nestjs/common';
import { ConnectionGraphqlModule } from './graphql/connectiongraphql.module';
import { ReportsTypeModule } from './models/report-types/reports-type.module';
import { ReportsDbModule } from './models/reports/reports.module';
import { UsersDbModule } from './models/users/users.module';

@Module({
	imports: [
		ConnectionGraphqlModule,
		UsersDbModule,
		ReportsDbModule,
		ReportsTypeModule,
	],
	exports: [UsersDbModule],
})
export class DbModule {}
