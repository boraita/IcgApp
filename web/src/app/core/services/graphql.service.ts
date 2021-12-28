import { Injectable } from '@angular/core';
import { ApolloQueryResult, DocumentNode } from '@apollo/client/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable()
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  watchGraphql(queryDocument: any): Observable<ApolloQueryResult<any>> {
    return this.apollo.watchQuery({
      query: queryDocument,
    }).valueChanges;
  }
}
