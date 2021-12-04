import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { getCookieItem } from '../persistence';
import { PathResources } from '../config/path-resources';
import { GlobalConfig } from '../config/global-config';

@Injectable()
export class LoginAuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    const isLoggedIn = getCookieItem(GlobalConfig.AUTHORIZATION_HEADER);
    if (!isLoggedIn) {
      this.router.navigate([PathResources.LOGIN]);
    }
    return !isLoggedIn;
  }
}
