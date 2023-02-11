import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import {
  MatNativeDateModule,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MatLegacyOptionModule as MatOptionModule,
} from '@angular/material/legacy-core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyProgressSpinnerModule as MatProgressSpinnerModule } from '@angular/material/legacy-progress-spinner';
import { MatLegacySelectModule as MatSelectModule } from '@angular/material/legacy-select';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { UserService } from '@shared/services/user.service';
import { SharedModule } from '../../shared/shared.module';
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
  ],
})
export class ReportsModule {}
