import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '@shared/shared.module';

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
