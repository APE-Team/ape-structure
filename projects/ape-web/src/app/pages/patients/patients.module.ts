import { NgModule } from '@angular/core';

import { PatientsRoutingModule } from './patients-routing.module';

import { PatientsComponent } from './patients.component';


@NgModule({
  imports: [PatientsRoutingModule],
  declarations: [PatientsComponent],
  exports: [PatientsComponent]
})
export class PatientsModule { }
