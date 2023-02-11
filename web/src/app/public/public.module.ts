import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { RouterModule } from '@angular/router';
import { LoggedUserGuard } from '@core/guards/logged-user.guard';
import { SharedModule } from '@shared/shared.module';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { LoginService } from './login/login.service';
import { LoginComponent } from './login/login/login.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    SharedModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: LoginComponent,
        canActivate: [LoggedUserGuard],
      },
    ]),
  ],
  providers: [LoginService],
})
export class PublicModule {}
