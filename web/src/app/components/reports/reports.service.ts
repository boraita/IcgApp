import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { GraphqlService } from '@app/core/services/graphql.service';
import { Area } from '@app/shared/models/area';
import { ApiResources } from '@core/config/api-resources';
import { resolveApiPath } from '@core/resolvePath';
import { Report } from '@shared/models/report';
import { catchError, map, Observable, tap } from 'rxjs';
import { ReportQueries } from './report-queries';

@Injectable()
export class ReportsService {
  constructor(
    private httpClient: HttpClient,
    private graphService: GraphqlService
  ) {}

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
  getAllAreas(): Observable<Area[]> {
    const path = resolveApiPath(ApiResources.ALL_AREAS);
    return this.httpClient.get(path).pipe(
      map((areas) =>
        (areas as Area[]).map((area) => {
          area.note = `
          Reporte de actitudes y comportamientos por niño (de forma resumida y concreta, especificar
            cosas que requieran atención inmediata).
            Nota: puede adjuntar en el correo los recursos necesarios para desarrollar su reporte y clase.
          `;
          return area;
        })
      )
    ) as Observable<Area[]>;
  }
}
