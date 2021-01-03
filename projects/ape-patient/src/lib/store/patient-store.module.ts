import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PatientStateService } from '@ape-api';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PatientStateServiceImpl } from './patient-state.service.impl';
import { PatientEffects } from './patient.effects';
import * as fromPatient from './patient.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature('patient', fromPatient.patientReducer),
        EffectsModule.forFeature([PatientEffects]),
    ],

    providers: [
        {
            provide: PatientStateService,
            useClass: PatientStateServiceImpl,
        },
    ],
})
export class PatientStoreModule {}
