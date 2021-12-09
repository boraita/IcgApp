import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { GlobalConfig } from '../config/global-config';
import { PathResources } from '../config/path-resources';
import { getStorageItem } from '../persistence';

@Injectable()
export class LoginAuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    const isLoggedIn = getStorageItem(GlobalConfig.AUTHORIZATION_HEADER);
    if (!isLoggedIn) {
      this.router.navigate([PathResources.LOGIN]);
    }
    return !!isLoggedIn;
  }
}
