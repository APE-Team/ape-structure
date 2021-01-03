import { UserModel } from '@ape-api';

import { createAction, props } from '@ngrx/store';

export const authenticated = createAction(
    '[Authentication] Authenticated',
    props<{ user: UserModel }>()
);

export const login = createAction('[Authentication] Login');

export const logout = createAction('[Authentication] Logout');

export const authenticationError = createAction('[Authentication] Error', props<{ error: string }>());