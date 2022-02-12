import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Report, ReportBasic } from '@shared/models/report';
import { ReportsService } from '../reports.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.scss'],
})
export class ReportDialogComponent implements OnInit {
  report$!: Observable<Report>;
  reportId!: string;
  constructor(
    private readonly reportService: ReportsService,
    @Inject(MAT_DIALOG_DATA) data: ReportBasic
  ) {
    this.reportId = data.id;
  }

  ngOnInit() {
    this.report$ = this.reportService.getReport(this.reportId);
  }
}
