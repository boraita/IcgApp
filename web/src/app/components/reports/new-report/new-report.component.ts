import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReportType } from '@app/shared/enums/report-type.enum';
import { PathResources } from '@core/config/path-resources';
import { ReportStatus } from '@shared/enums/report-status.enum';
import { User } from '@shared/models/user';
import { UserService } from '@shared/services/user.service';
import { Observable, tap } from 'rxjs';
import { RecomendedPointsDialogComponent } from '../recomended-points/recomended-points-dialog.component';
import { ReportsService } from '../reports.service';

import { AngularEditorConfig } from '@kolkov/angular-editor';

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
  topicSelected!: ReportType;
  types!: ReportType[];
  backupPeople$!: Observable<User[]>;
  minReportDate!: Date;
  // TODO Hacer la llamada al servicio para obtener los puntos recomendados
  recomendedPointWriting: any[] = [
    'Base bíblica de la enseñanza',
    'Objetivo de la enseñanza',
    'Resumen de la enseñanza',
    'Repaso y Memorización *Versículo y/o conceptos, significados a memorizar',
    'Enfoque hacia su Identidad',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private reportService: ReportsService,
    private dialog: MatDialog,
    private userService: UserService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.buildForm();
    // TODO Modificar por Areas
    this.types = Object.values(ReportType);
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
      data: [...this.recomendedPointWriting],
    });
  }
  private buildForm() {
    const today = new Date();
    this.minReportDate = today;
    this.minReportDate.setDate(today.getDate() - this.DAYS_BEFORE_REPORT);
    this.reportForm = this.formBuilder.group({
      type: [ReportType.Kids, [Validators.required]],
      idsBackupPeople: [[]],
      description: [null, [Validators.required]],
      date: [today, [Validators.required]],
      text: [null, Validators.required],
      status: [ReportStatus.done, Validators.required],
    });
  }
}
