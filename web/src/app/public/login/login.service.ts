import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResources } from '@app/core/config/api-resources';
import { setStorageItem } from '@app/core/persistence';
import { resolveApiPath } from '@app/core/resolvePath';
import { filter, tap } from 'rxjs';
import { GlobalConfig } from '../../core/config/global-config';

@Injectable()
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  login(username: string, password: string) {
    const path = resolveApiPath(ApiResources.LOGIN);
    return this.httpClient.post(path, { username, password }).pipe(
      tap((response: any) => {
        const authName = GlobalConfig.AUTHORIZATION_HEADER;
        const { authorization } = response;
        setStorageItem(authName, authorization);
      })
    );
  }
}
