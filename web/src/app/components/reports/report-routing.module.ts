import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathResources } from '@app/core/config/path-resources';
import { NewReportComponent } from './new-report/new-report.component';
import { ReportListComponent } from './report-list/report-list.component';

const routes: Routes = [
  { path: '', component: NewReportComponent },
  { path: PathResources.LIST, component: ReportListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
