import { Component, OnInit } from '@angular/core';
import { UntypedFormControl } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ReportBasic } from '@shared/models/report';
import {
  BehaviorSubject,
  combineLatest,
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
  reportDataSet$ = new BehaviorSubject<ReportBasic[] | null>(null);
  searchText = new UntypedFormControl('');
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
    this.refreshReports$.next(true);
  }

  private loadReportList() {
    this.refreshReports$
      .pipe(
        tap(() => (this.loading = true)),
        switchMapTo(
          this.reportService.getAllReport().pipe(
            filter(({ loading }) => !loading),
            tap((response) => {
              this.loading = response.loading;
              this.reportDataSet$.next(response.data?.getReports);
            })
          )
        )
      )
      .subscribe();
  }
  private initFilterCountryList() {
    this.searchResult$ = combineLatest([
      this.reportDataSet$.asObservable(),
      this.searchText.valueChanges.pipe(startWith('')),
    ]).pipe(
      distinctUntilChanged(),
      debounceTime(400),
      filter(([data]) => !!data),
      map(([reports, filter]) =>
        reports!.filter(
          (report: ReportBasic) =>
            report.type.toLowerCase().includes(filter.toLowerCase()) ||
            report.createdBy.name
              .toLowerCase()
              .includes(filter.toLowerCase()) ||
            report.description.toLowerCase().includes(filter.toLowerCase())
        )
      )
    );
  }
}
