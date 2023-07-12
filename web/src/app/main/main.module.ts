import { GraphqlService } from '@app/core/services/graphql.service';
import { HeaderModule } from '@components/header/header.module';
import { UserService } from '@shared-services/user.service';
import { SharedModule } from '@shared/shared.module';
import { MainRoutingModule } from './main-router.module';
import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [MainComponent],
  imports: [SharedModule, HeaderModule, MainRoutingModule],
  providers: [UserService, GraphqlService],
})
export class MainModule {}
