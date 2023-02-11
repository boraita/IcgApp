import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyMenuModule as MatMenuModule } from '@angular/material/legacy-menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
