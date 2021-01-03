import { map, switchMap } from 'rxjs/operators';

import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';

import * as patientActions from './patient.actions';
import { PatientDataService } from 'projects/ape-api/src/lib/patient/service/patient-data.service';
import { PatientModel } from '@ape-api';

@Injectable()
export class PatientEffects {
    public listPatientsByUserId = createEffect(() =>
        this.actions$.pipe(
            ofType(patientActions.listPatientsByUserId),
            switchMap((action) =>
                this.patientDataService.listPatientsByUserId$(action.userId).pipe(
                    map((patients) => {
                        return patientActions.listPatientsByUserIdSuccess({
                            patients: patients as PatientModel[],
                        });
                    })
                )
            )
        )
    );

    @Effect()
    public loadPatient = createEffect(() =>
        this.actions$.pipe(
            ofType(patientActions.loadPatient),
            switchMap((action) =>
                this.patientDataService.load$(action.uid).pipe(
                    map((patient) => {
                        return patientActions.loadPatientSuccess({
                            patient: patient as PatientModel,
                        });
                    })
                )
            )
        )
    );
   
    public constructor(
        private actions$: Actions,
        private patientDataService: PatientDataService
    ) {}
}
