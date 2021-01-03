import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    PatientDataModule,
    PatientListModule,
    PatientStoreModule,
} from '@ape-patient';

import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';

@NgModule({
    imports: [
        CommonModule,
        PatientDataModule,
        PatientListModule,
        PatientStoreModule,
        PatientsRoutingModule,
    ],
    declarations: [PatientsComponent],
    exports: [PatientsComponent],
})
export class PatientsModule {}
