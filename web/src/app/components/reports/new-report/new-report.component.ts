import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PathResources } from '@core/config/path-resources';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ReportStatus } from '@shared/enums/report-status.enum';
import { ReportType } from '@shared/models/report-type';
import { User } from '@shared/models/user';
import { UserService } from '@shared/services/user.service';
import { map, Observable, tap } from 'rxjs';
import { RecomendedPointsDialogComponent } from '../recomended-points/recomended-points-dialog.component';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss'],
})
export class NewReportComponent implements OnInit {
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '200px',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' },
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText',
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };
  DAYS_BEFORE_REPORT = 14;
  reportForm!: FormGroup;
  reportTypeSelected!: ReportType;
  reportTypes$!: Observable<ReportType[]>;
  backupPeople$!: Observable<User[]>;
  minReportDate!: Date;

  constructor(
    private formBuilder: FormBuilder,
    private reportService: ReportsService,
    private dialog: MatDialog,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.buildForm();
    this.reportTypes$ = this.reportService
      .getAllReportsTypes()
      .pipe(map(({ data }) => data?.getAllReportsTypes));
    this.backupPeople$ = this.userService.getAllUsers();
  }

  onSubmit() {
    this.reportService
      .sendReport(this.reportForm.value)
      .pipe(
        tap(() => {
          this.reportForm.reset();
          this.router.navigate([PathResources.REPORT_LIST]);
        })
      )
      .subscribe();
  }

  openDialog() {
    this.dialog.open(RecomendedPointsDialogComponent, {
      data: [...this.reportTypeSelected.describedPoints],
    });
  }
  selectReportType(reportType: ReportType) {
    this.reportTypeSelected = reportType;
  }

  private buildForm() {
    const today = new Date();
    this.minReportDate = today;
    this.minReportDate.setDate(today.getDate() - this.DAYS_BEFORE_REPORT);
    this.reportForm = this.formBuilder.group({
      type: [null, [Validators.required]],
      idsBackupPeople: [[]],
      description: [null, [Validators.required]],
      date: [today, [Validators.required]],
      text: [null, Validators.required],
      status: [ReportStatus.done, Validators.required],
    });
  }
}
