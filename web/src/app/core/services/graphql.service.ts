import { Injectable } from '@angular/core';
import { ApolloQueryResult, FetchResult } from '@apollo/client/core';
import { Apollo, MutationResult } from 'apollo-angular';
import { Observable, tap } from 'rxjs';

@Injectable()
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  watchGraphql(
    queryDocument: any,
    variables?: {},
    fetchPolicy?: 'cache-and-network' | 'cache-first' | 'network-only'
  ): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({
      query: queryDocument,
      variables,
      fetchPolicy,
    }).valueChanges;
  }

  mutateGraphql(
    queryDocument: any,
    variables: {}
  ): Observable<MutationResult<unknown>> {
    return this.apollo.mutate({
      mutation: queryDocument,
      variables,
    });
  }
}
