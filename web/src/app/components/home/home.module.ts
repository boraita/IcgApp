import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '@shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    SharedModule,
    MatIconModule,
    MatButtonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }] as Routes),
  ],
})
export class HomeModule {}
