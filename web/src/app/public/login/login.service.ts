import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResources } from '@app/core/config/api-resources';
import { resolveApiPath } from '@app/core/resolvePath';
import { map } from 'rxjs';

@Injectable()
export class LoginService {
  constructor(private httpClient: HttpClient) {}
  login(username: string, password: string) {
    const path = resolveApiPath(ApiResources.LOGIN);
    return this.httpClient.post(path, { username, password }).pipe(
      map((response) => {
        console.log('Login service: ', response);
        return response;
      })
    );
  }
}
