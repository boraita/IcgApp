import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportsService } from '../reports.service';
import { Observable } from 'rxjs';
import { Area } from '../models/area';

@Component({
  selector: 'app-new-report',
  templateUrl: './new-report.component.html',
  styleUrls: ['./new-report.component.scss'],
})
export class NewReportComponent implements OnInit {
  reportForm!: FormGroup;
  areaSelected!: string;
  areas$!: Observable<Area[]>;

  constructor(
    private formBuilder: FormBuilder,
    private reportService: ReportsService
  ) {}
  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      area: [null, [Validators.required]],
      userId: [null, Validators.required],
      text: [null, Validators.required],
    });
    this.areas$ = this.reportService.getAllAreas();
  }

  onSubmit() {
    this.reportService.sendReport(this.reportForm.value).subscribe();
  }
}
