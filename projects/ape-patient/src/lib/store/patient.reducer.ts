import { PatientModel } from '@ape-api';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Action, createReducer, on } from '@ngrx/store';

import * as patientActions from './patient.actions';

export interface State extends EntityState<PatientModel> {
    loading: boolean;
    error?: string | null;
}

export interface PatientPartialState {
    readonly ['patient']: State;
}

export const patientAdapter: EntityAdapter<PatientModel> = createEntityAdapter<PatientModel>(
    {
        selectId: (model: PatientModel) => model.id,
    }
);

export const initialState: State = patientAdapter.getInitialState({
    loading: false,
    error: null,
});

export const patientReducer = createReducer(
    initialState,
    on(patientActions.listPatientsByUserIdSuccess, (state, { patients }) =>
        patientAdapter.upsertMany(patients, state)
    ),
    on(patientActions.loadPatientSuccess, (state, { patient }) =>
        patientAdapter.upsertOne(patient as PatientModel, state)
    )
);

export function reducer(state: State | undefined, action: Action) {
    return patientReducer(state, action);
}

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = patientAdapter.getSelectors();
