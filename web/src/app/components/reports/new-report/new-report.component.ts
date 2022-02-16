import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ReportType } from '@app/shared/enums/report-type.enum';
import { ReportStatus } from '@shared/enums/report-status.enum';
import { UserService } from '@shared/services/user.service';
import { Observable } from 'rxjs';
import { RecomendedPointsDialogComponent } from '../recomended-points/recomended-points-dialog.component';
import { ReportsService } from '../reports.service';
import { Router } from '@angular/router';
import { PathResources } from '../../../core/config/path-resources';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss'],
})
export class NewReportComponent implements OnInit {
  reportForm!: FormGroup;
  topicSelected!: ReportType;
  types!: ReportType[];
  // TODO Hacer llamada para las personas de backup
  backupPeople$!: Observable<any[]>;
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
    this.reportForm = this.formBuilder.group({
      type: [ReportType.Kids, [Validators.required]],
      idsBackupPeople: [[]],
      description: [null, [Validators.required]],
      date: [new Date(), [Validators.required]],
      text: [null, Validators.required],
      status: [ReportStatus.done, Validators.required],
    });
    this.types = Object.values(ReportType);
    this.backupPeople$ = this.userService.getAllUsers();
  }

  onSubmit() {
    this.reportService.sendReport(this.reportForm.value).subscribe(() => {
      this.reportForm.reset();
      this.router.navigate([PathResources.REPORT_LIST]);
    });
  }

  openDialog() {
    this.dialog.open(RecomendedPointsDialogComponent, {
      data: [...this.recomendedPointWriting],
    });
  }
}
