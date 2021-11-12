import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResources } from '@core/config/api-resources';
import { resolveApiPath } from '@core/resolvePath';
import { Observable, of } from 'rxjs';
import { Area } from './models/area';
import { Report } from './models/report';

@Injectable()
export class ReportsService {
  constructor(private httpClient: HttpClient) {}

  sendReport(body: Report) {
    const path = resolveApiPath(ApiResources.SEND_REPORT);
    return this.httpClient.post(path, body);
  }
  getAllReport(): Observable<Report[]> {
    const path = resolveApiPath(ApiResources.ALL_REPORT);
    return this.httpClient.get(path) as Observable<Report[]>;
  }
  getAllAreas(): Observable<Area[]> {
    const path = resolveApiPath(ApiResources.ALL_AREAS);
    return this.httpClient.get(path) as Observable<Area[]>;
    return of([
      { value: 0, text: 'Niños' },
      { value: 1, text: 'Multimedia' },
      { value: 2, text: 'Jovenes' },
      { value: 4, text: 'Alabanza' },
    ]);
  }
}
