import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReportBasic } from '@shared/models/report';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  Observable,
  startWith,
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
  refreshReports$ = new BehaviorSubject(false);
  reportDataSet!: ReportBasic[];
  searchText = new FormControl('');
  searchQuery$!: Observable<string>;
  loading: boolean = false;
  searchResult$!: Observable<ReportBasic[]>;
  constructor(
    private reportService: ReportsService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadReportList();
    this.initFilterCountryList();
  }

  openReportDialog(item: ReportBasic) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = item;
    this.dialog.open(ReportDialogComponent, dialogConfig);
  }
  refreshData() {
    this.refreshReports$.next(false);
  }

  private loadReportList() {
    this.refreshReports$
      .pipe(
        tap(() => (this.loading = true)),
        switchMapTo(
          this.reportService.getAllReport().pipe(
            tap((data) => (this.reportDataSet = data)),
            tap(() => (this.loading = false))
          )
        )
      )
      .subscribe();
  }
  private initFilterCountryList() {
    this.searchQuery$ = this.searchText.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(10),
      startWith('')
    );
    this.searchResult$! = this.searchQuery$.pipe(
      filter(() => !!this.reportDataSet),
      map((query) => {
        return this.reportDataSet.filter(
          (report: ReportBasic) =>
            report.type.toLowerCase().includes(query.toLowerCase()) ||
            report.createdBy.name.toLowerCase().includes(query.toLowerCase()) ||
            report.description.toLowerCase().includes(query.toLowerCase())
        );
      })
    );
  }
}
