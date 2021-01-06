import { UserModel } from '@ape-api';
import { createReducer, on } from '@ngrx/store';

import * as authenticationActions from './authentication.actions';

export interface AuthenticationState {
    authenticatedUser: UserModel;
    loading: boolean;
    error?: string | null;
}

export interface AuthenticationPartialState {
    readonly ['authentication']: AuthenticationState;
}

const defaultUser: UserModel = {
    id: '0',
    displayName: 'GUEST',
    firstName: '',
    lastName: '',
    roles: [],
};

export const authenticationReducer = createReducer(
    { authenticatedUser: defaultUser, loading: false },
    on(authenticationActions.authenticated, (state, { user }) => ({
        ...state,
        authenticatedUser: user,
        loading: false,
    })),

    on(authenticationActions.login, (state) => ({
        ...state,
        loading: true,
    })),
    on(authenticationActions.authenticationError, (state) => ({
        ...state,
        authenticatedUser: defaultUser,
        loading: false,
    })),
    on(authenticationActions.logout, (state) => ({
        ...state,
        authenticatedUser: defaultUser,
        loading: false,
    }))
);
