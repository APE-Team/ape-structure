import { PatientModel } from '@ape-api';
import { createFeatureSelector, createSelector } from '@ngrx/store';

import { patientAdapter, PatientPartialState, State } from './patient.reducer';

const { selectAll, selectEntities } = patientAdapter.getSelectors();

export const getPatientState = createFeatureSelector<PatientPartialState, State>(
    'patient'
);

export const getPatientError = createSelector(getPatientState, (state: State) => state.error);

export const getPatientLoading = createSelector(getPatientState, (state: State) => state.loading);

export const selectPatientEntities = createSelector(getPatientState, selectEntities);

export const selectAllPatients = createSelector(getPatientState, selectAll);

export const selectPatientsByUserId = () =>
    createSelector(selectAllPatients, (patients: PatientModel[], props: any) =>
        patients.filter((patient) => patient.uid === props.userId)
    );
