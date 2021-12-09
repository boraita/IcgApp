import { Component } from '@angular/core';
import { setLogout } from '@app/core/persistence';
import { Router } from '@angular/router';
import { PathResources } from '../../../core/config/path-resources';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
  constructor(private route: Router) {}
  logout() {
    setLogout();
    this.route.navigate([PathResources.LOGIN]);
  }
}
