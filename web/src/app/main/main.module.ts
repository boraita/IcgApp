import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptor } from '@app/core/services/auth-interceptor.service';
import { HeaderModule } from '@components/header/header.module';
import { UserService } from '@shared-services/user.service';
import { SharedModule } from '@shared/shared.module';
import { MainRoutingModule } from './main-router.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [SharedModule, HeaderModule, MainRoutingModule],
  providers: [UserService],
})
export class MainModule {}
