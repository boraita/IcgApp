import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Area } from '@app/shared/models/area';
import { Observable } from 'rxjs';
import { RecomendedPointsDialogComponent } from '../recomended-points/recomended-points-dialog.component';
import { ReportsService } from '../reports.service';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss'],
})
export class NewReportComponent implements OnInit {
  reportForm!: FormGroup;
  areaSelected!: string;
  areas$!: Observable<Area[]>;
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
    private userService: UserService
  ) {}
  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      area: [null, [Validators.required]],
      backup: [[], [Validators.required]],
      topic: [null, [Validators.required]],
      files: [[], [Validators.required]],
      date: [new Date(), [Validators.required]],
      text: [null, Validators.required],
    });
    this.areas$ = this.reportService.getAllAreas();
    this.backupPeople$ = this.userService.getAllUsers();
  }

  onSubmit() {
    this.reportService.sendReport(this.reportForm.value).subscribe();
  }

  openDialog() {
    this.dialog.open(RecomendedPointsDialogComponent, {
      data: [...this.recomendedPointWriting],
    });
  }
}
