import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
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
import {
  MatFormFieldModule,
  MAT_FORM_FIELD_DEFAULT_OPTIONS,
} from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { UserService } from '@shared/services/user.service';
import { SharedModule } from '@shared/shared.module';
import { NewReportComponent } from './new-report/new-report.component';
import { ReportDialogComponent } from './report-dialog/report-dialog.component';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportRoutingModule } from './report-routing.module';
import { ReportsService } from './reports.service';

@NgModule({
  declarations: [
    ReportListComponent,
    NewReportComponent,
    ReportDialogComponent,
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
    MatDialogModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    AngularEditorModule,
  ],
  providers: [
    ReportsService,
    UserService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' },
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'fill' },
    },
  ],
})
export class ReportsModule {}
