import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GraphqlService } from '@app/core/services/graphql.service';
import { ApiResources } from '@core/config/api-resources';
import { resolveApiPath } from '@core/resolvePath';
import { map, Observable } from 'rxjs';
import { Area } from './models/area';
import { Report } from './models/report';
import { ReportQueries } from './report-queries';

@Injectable()
export class ReportsService {
  constructor(
    private httpClient: HttpClient,
    private graphService: GraphqlService
  ) {}

  sendReport(body: Report) {
    const path = resolveApiPath(ApiResources.SEND_REPORT);
    return this.httpClient.post(path, body);
  }
  getAllReport(): Observable<Report[]> {
    return this.graphService.watchGraphql(ReportQueries.reportsInfo).pipe(
      map((result: any) => {
        return result?.data?.getReports;
      })
    );
  }
  getAllAreas(): Observable<Area[]> {
    const path = resolveApiPath(ApiResources.ALL_AREAS);
    return this.httpClient.get(path) as Observable<Area[]>;
  }
}
