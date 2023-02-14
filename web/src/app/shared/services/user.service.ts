import { Injectable } from '@angular/core';
import { GraphqlService } from '@core/services/graphql.service';
import { map, Observable } from 'rxjs';
import { User } from '../models/user';
import { UserQueries } from './user-queries';

@Injectable()
export class UserService {
  constructor(private graphService: GraphqlService) {}

  getAllUsers(): Observable<User[]> {
    return this.graphService
      .watchGraphql(UserQueries.getAllUsers)
      .pipe(map((result: { data: { users: User[] } }) => result?.data?.users));
  }
}
