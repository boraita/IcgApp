import { NgModule } from '@angular/core';
import { HeaderModule } from '../components/header/header.module';
import { SharedModule } from '../shared/shared.module';
import { MainRoutingModule } from './main-router.module';
import { MainComponent } from './main/main.component';

@NgModule({
  declarations: [MainComponent],
  imports: [SharedModule, HeaderModule, MainRoutingModule],
})
export class MainModule {}
