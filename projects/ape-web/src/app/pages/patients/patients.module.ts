import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
    PatientDataModule,
    PatientListModule,
    PatientStoreModule,
} from '@ape-patient';
import { ApeSearchModule } from '@ape-search';

import { PatientSearchService } from './patient-search.service';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';

@NgModule({
    imports: [
        CommonModule,
        ApeSearchModule,
        PatientDataModule,
        PatientListModule,
        PatientStoreModule,
        PatientsRoutingModule,
    ],
    declarations: [PatientsComponent],
    exports: [PatientsComponent],
    providers: [PatientSearchService],
})
export class PatientsModule {}
