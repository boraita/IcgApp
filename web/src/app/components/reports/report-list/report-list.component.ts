import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../models/report';
import { ReportsService } from '../reports.service';

@Component({
  selector: 'app-report-list',
  templateUrl: './report-list.component.html',
  styleUrls: ['./report-list.component.scss']
})
export class ReportListComponent implements OnInit {

  reports$!: Observable<Report[]>;
  constructor(private reportService: ReportsService) { }

  ngOnInit(): void {
    this.reports$ = this.reportService.getAllReport();
  }

}
