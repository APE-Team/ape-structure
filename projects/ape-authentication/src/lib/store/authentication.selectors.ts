import { createFeatureSelector, createSelector } from '@ngrx/store';

import {
    AuthenticationPartialState,
    AuthenticationState,
} from './authentication.reducer';

export const selectAuthenticationState = createFeatureSelector<
    AuthenticationPartialState,
    AuthenticationState
>('authentication');

export const selectAuthenticatedUser = createSelector(
    selectAuthenticationState,
    (state: AuthenticationState) => state.authenticatedUser
);

export const selectIsAuthenticated = createSelector(
    selectAuthenticationState,
    (state: AuthenticationState) => state.authenticatedUser.uid != '0'
);

export const selectLoading = (state: AuthenticationPartialState) =>
    state.authentication.loading;
