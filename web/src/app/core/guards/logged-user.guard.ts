import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { GlobalConfig } from '../config/global-config';
import { PathResources } from '../config/path-resources';
import { getStorageItem } from '../persistence';

@Injectable({ providedIn: 'root' })
export class LoggedUserGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const userToken = getStorageItem(GlobalConfig.AUTHORIZATION_HEADER);
    if (!userToken) {
      return true;
    } else {
      this.router.navigate([PathResources.HOME]);
      return false;
    }
  }
}
