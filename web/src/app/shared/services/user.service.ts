import { Injectable } from '@angular/core';
import { ReportQueries } from '@app/components/reports/report-queries';
import { GraphqlService } from '../../core/services/graphql.service';
import { UserQueries } from './user-queries';
import { map } from 'rxjs';

@Injectable()
export class UserService {
  constructor(private graphService: GraphqlService) {}

  getAllUsers() {
    return this.graphService
      .watchGraphql(UserQueries.getAllUsers)
      .pipe(map((result: any) => result?.data?.users));
  }
}
