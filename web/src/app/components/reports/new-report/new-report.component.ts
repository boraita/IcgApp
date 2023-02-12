import { Component, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PathResources } from '@core/config/path-resources';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { ReportStatus } from '@shared/enums/report-status.enum';
import { ReportType } from '@shared/models/report-type';
import { User } from '@shared/models/user';
import { UserService } from '@shared/services/user.service';
import { map, Observable, tap } from 'rxjs';
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
    height: 'auto',
    minHeight: '200px',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
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
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [['bold', 'italic'], ['fontSize']],
  };
  DAYS_BEFORE_REPORT = 14;
  reportForm!: UntypedFormGroup;
  reportTypeSelected!: ReportType;
  reportTypes$!: Observable<ReportType[]>;
  backupPeople$!: Observable<User[]>;
  minReportDate!: Date;

  constructor(
    private formBuilder: UntypedFormBuilder,
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

  selectReportType(reportType: ReportType) {
    this.reportTypeSelected = reportType;
    this.setTestPoints(reportType.describedPoints);
  }
  // Enrich the text to be easier to write the points
  private setTestPoints(points: String[]) {
    const enrichText = points
      .map(
        (point) =>
          `<div class="mat-list-item-content"><b>${point}</b>
          </div><div class="mat-list-item-content"><b><br></b>
          </div><div class="mat-list-item-content"><b><br></b></div>`
      )
      .join()
      .replaceAll('div>,', 'div>');
    this.reportForm.get('text')?.setValue(enrichText);
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
