import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Report, ReportBasic } from '@shared/models/report';
import { filter, map, Observable, tap } from 'rxjs';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report-dialog',
  templateUrl: './report-dialog.component.html',
  styleUrls: ['./report-dialog.component.scss'],
})
export class ReportDialogComponent implements OnInit {
  report$!: Observable<Report>;
  reportId!: string;
  constructor(
    public dialogRef: MatDialogRef<ReportDialogComponent>,
    private readonly reportService: ReportsService,
    @Inject(MAT_DIALOG_DATA) data: ReportBasic
  ) {
    this.reportId = data.id;
  }
  loading = true;
  ngOnInit() {
    this.report$ = this.reportService.getReport(this.reportId).pipe(
      filter(({ loading }) => !loading),
      tap(({ loading }) => (this.loading = loading)),
      map(({ data }) => data.getReport)
    );
  }
  generatePdf() {
    this.reportService.generatePdf(this.reportId).subscribe({
      next: () => {
        this.dialogRef.close();
      },
      error: (err) => console.error(err),
    });
  }
}
