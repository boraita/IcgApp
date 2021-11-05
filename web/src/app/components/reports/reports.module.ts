import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { RouterModule, Routes } from '@angular/router';
import { ReportMainComponent } from './report-main/report-main.component';
import { ReportsService } from './reports.service';

@NgModule({
  declarations: [
    ReportMainComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    HttpClientModule,
    RouterModule.forChild([{ path: '', component: ReportMainComponent }] as Routes)

  ],
  providers: [
    ReportsService
  ]
})
export class ReportsModule { }
