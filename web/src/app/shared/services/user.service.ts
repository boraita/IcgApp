import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { GraphqlService } from '../../core/services/graphql.service';
import { UserQueries } from './user-queries';

@Injectable()
export class UserService {
  constructor(private graphService: GraphqlService) {}

  getAllUsers() {
    return this.graphService
      .watchGraphql(UserQueries.getAllUsers)
      .pipe(map((result: any) => result?.data?.users));
  }
}
