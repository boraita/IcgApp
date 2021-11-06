import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathResources } from '@app/core/config/path-resources';
import { ReportListComponent } from './report-list/report-list.component';
import { ReportMainComponent } from './report-main/report-main.component';

const routes: Routes = [
  { path: '', component: ReportMainComponent },
  { path: PathResources.LIST, component: ReportListComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportRoutingModule { }
