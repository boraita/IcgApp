import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportsService } from '../reports.service';

interface Area {
  value: number;
  text: string;
}
@Component({
  selector: 'app-report-main',
  templateUrl: './report-main.component.html',
  styleUrls: ['./report-main.component.scss']
})
export class ReportMainComponent implements OnInit {

  reportForm!: FormGroup;
  area!: string;
  areaSelected!: string;
  reportList: Area[] = [
    { value: 0, text: 'Niños' },
    { value: 1, text: 'Multimedia' },
    { value: 2, text: 'Jovenes' },
    { value: 4, text: 'Alabanza' },
  ];

  constructor(private formBuilder: FormBuilder, private reportService: ReportsService) { }

  ngOnInit(): void {
    this.reportForm = this.formBuilder.group({
      area: [null, [Validators.required]],
      userId: [null, Validators.required],
      text: [null, Validators.required],
    });
  }

  onSubmit() {
    this.reportService.sendReport(this.reportForm.value).subscribe()
  }

}
