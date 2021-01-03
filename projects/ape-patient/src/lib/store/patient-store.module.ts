import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PatientStateService } from '@ape-api';

import { PatientStateServiceImpl } from './patient-state.service.impl';

@NgModule({
    imports: [CommonModule],
    providers: [
        {
            provide: PatientStateService,
            useClass: PatientStateServiceImpl,
        },
    ],
})
export class PatientStoreModule {}
