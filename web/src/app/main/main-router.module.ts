import { PathResources } from '@app/core/config/path-resources';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: PathResources.HOME,
        loadChildren: () =>
          import('../components/home/home.module').then((m) => m.HomeModule),
      },
      {
        path: PathResources.SCHEDULE,
        loadChildren: () =>
          import('../components/schedule/schedule.module').then(
            (m) => m.ScheduleModule
          ),
      },
      {
        path: PathResources.REPORT,
        loadChildren: () =>
          import('../components/reports/reports.module').then(
            (m) => m.ReportsModule
          ),
      },
      { path: '', redirectTo: PathResources.REPORT_LIST, pathMatch: 'full' },
      { path: '**', redirectTo: PathResources.REPORT_LIST },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
