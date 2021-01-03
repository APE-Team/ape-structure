import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { PatientModel, PatientStateService } from '@ape-api';
import { select, Store } from '@ngrx/store';

import * as patientActions from './patient.actions';
import * as fromPatient from './patient.reducer';
import * as patientSelectors from './patient.selectors';

@Injectable()
export class PatientStateServiceImpl extends PatientStateService {
    public constructor(private store: Store<fromPatient.PatientPartialState>) {
        super();
    }

    public dispatchListPatientsByUserIdAction(userId: string): void {
        this.store.dispatch(patientActions.listPatientsByUserId({ userId }));
    }

    public isLoading$(): Observable<boolean> {
        throw new Error('Method not implemented.');
    }

    public selectPatientsByUserId$(userId: string): Observable<PatientModel[]> {
        return this.store.pipe(
            select(patientSelectors.selectPatientsByUserId(), { userId })
        );
    }
}
