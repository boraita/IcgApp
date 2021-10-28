import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportMainComponent } from './report-main/report-main.component';



@NgModule({
  declarations: [
    ReportMainComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ReportMainComponent }] as Routes)

  ]
})
export class ReportsModule { }
