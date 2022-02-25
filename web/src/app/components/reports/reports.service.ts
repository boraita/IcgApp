import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { GraphqlService } from '@app/core/services/graphql.service';
import { Report } from '@shared/models/report';
import { map, Observable } from 'rxjs';
import { ReportQueries } from './report-queries';

@Injectable()
export class ReportsService {
  constructor(private graphService: GraphqlService) {}

  sendReport(body: Report) {
    return this.graphService
      .mutateGraphql(ReportQueries.createReport, { report: body })
      .pipe(map((result: any) => result?.data));
  }
  getAllReport(): Observable<ApolloQueryResult<any>> {
    return this.graphService.watchGraphql(
      ReportQueries.reportsInfo,
      {},
      'cache-and-network'
    );
  }
  getReport(id: string): Observable<ApolloQueryResult<any>> {
    return this.graphService.watchGraphql(ReportQueries.getReport, { id });
  }
  getAllReportsTypes(): Observable<ApolloQueryResult<any>> {
    return this.graphService.watchGraphql(ReportQueries.getAllreportType);
  }
}
