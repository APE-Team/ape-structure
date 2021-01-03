import { PatientModel } from '@ape-api';
import { createAction, props } from '@ngrx/store';

export const listPatientsByUserId = createAction(
    '[Patient List] List Patients By User Id',
    props<{ userId: string }>()
);

export const listPatientsByUserIdSuccess = createAction(
    '[Patient List] List Patients By User Id Success',
    props<{ patients: PatientModel[] }>()
);

export const loadPatient = createAction('[Patient] Load Patient', props<{ uid: string }>());

export const loadPatientSuccess = createAction(
    '[Patient] Load Patient Success',
    props<{ patient: PatientModel }>()
);

export const selectPatientsByUserId = createAction(
    '[Patient List] Select Patients By User Id',
    props<{ userId: string }>()
);
