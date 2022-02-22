import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PathResources } from '@app/core/config/path-resources';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  form: FormGroup;
  public loginInvalid = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService
  ) {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required],
    });
  }
  onSubmit(): void {
    this.loginInvalid = false;
    if (this.form.valid) {
      const username = this.form.get('username')?.value.toLowerCase();
      const password = this.form.get('password')?.value;

      this.loginService.login(username, password).subscribe({
        next: () => {
          this.router.navigate([PathResources.REPORT_LIST]);
        },
        error: (e: HttpErrorResponse) => {
          console.log('error login:', e.status);
          this.loginInvalid = true;
        },
      });
    }
  }
}
