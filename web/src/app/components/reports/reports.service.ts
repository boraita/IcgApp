import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResources } from '@core/config/api-resources';
import { resolveApiPath } from '@core/resolvePath';
import { Report } from './models/report';

@Injectable()
export class ReportsService {

  constructor(private httpClient: HttpClient) { }

  sendReport(body: Report) {
    const path = resolveApiPath(ApiResources.SEND_REPORT)
    return this.httpClient.post(path, body)
  }
}
