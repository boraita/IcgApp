import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GraphqlOptions implements GqlOptionsFactory {
	createGqlOptions(): Promise<GqlModuleOptions> | GqlModuleOptions {
		return {
			installSubscriptionHandlers: true,
			autoSchemaFile: 'src/schema.gql',
		};
	}
}
