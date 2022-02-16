import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReportBasic } from '@shared/models/report';
import {
  BehaviorSubject,
  distinctUntilChanged,
  Observable,
  switchMapTo,
  tap,
} from 'rxjs';
import { ReportDialogComponent } from '../report-dialog/report-dialog.component';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss'],
})
export class ReportListComponent implements OnInit {
  reports$!: Observable<ReportBasic[]>;
  event$ = new BehaviorSubject(false);
  loading: boolean = false;
  constructor(
    private reportService: ReportsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadReportList();
  }

  openReportDialog(item: ReportBasic) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = item;
    this.dialog.open(ReportDialogComponent, dialogConfig);
  }
  refetchData() {
    this.event$.next(true);
  }
  private loadReportList() {
    this.reports$ = this.event$.pipe(
      distinctUntilChanged(),
      tap(() => (this.loading = true)),
      switchMapTo(
        this.reportService
          .getAllReport()
          .pipe(tap(() => (this.loading = false)))
      )
    );
  }
}
