import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MatNativeDateModule,
  MatOptionModule,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { SharedModule } from '../../shared/shared.module';
import { NewReportComponent } from './new-report/new-report.component';
import { RecomendedPointsDialogComponent } from './recomended-points/recomended-points-dialog.component';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportRoutingModule } from './report-routing.module';
import { ReportsService } from './reports.service';
import { UserService } from '../../shared/services/user.service';

@NgModule({
  declarations: [
    ReportListComponent,
    NewReportComponent,
    RecomendedPointsDialogComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatListModule,
    ReportRoutingModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [
    ReportsService,
    UserService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
  ],
})
export class ReportsModule {}
