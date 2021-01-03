import { PatientDataService } from 'projects/ape-api/src/lib/patient/service/patient-data.service';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PatientDataServiceImpl } from './service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [
        {
            provide: PatientDataService,
            useClass: PatientDataServiceImpl,
        },
    ],
})
export class PatientDataModule {}
