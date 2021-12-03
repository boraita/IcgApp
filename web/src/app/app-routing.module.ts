import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PathResources } from './core/config/path-resources';
import { LoginAuthGuard } from './core/guards/login-auth.guard';

const routes: Routes = [
  {
    path: PathResources.LOGIN,
    loadChildren: () =>
      import('./public/public.module').then((m) => m.PublicModule),
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    canActivate: [LoginAuthGuard],
  },
  { path: '', redirectTo: PathResources.HOME, pathMatch: 'full' },
  { path: '**', redirectTo: PathResources.HOME },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginAuthGuard],
})
export class AppRoutingModule {}
