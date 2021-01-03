import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';

import * as authenticationActions from './authentication.actions';
import { AuthenticationPartialState } from './authentication.reducer';
import * as authenticationSelectors from './authentication.selectors';
import { AuthenticationStateService, UserModel } from '@ape-api';

@Injectable()
export class AuthenticationStateServiceImpl extends AuthenticationStateService {
    public constructor(private store: Store<AuthenticationPartialState>) {
        super();
    }

    public dispatchAuthenticated(user: UserModel): void {
        this.store.dispatch(authenticationActions.authenticated({ user }));
    }

    public dispatchLogin(): void {
        this.store.dispatch(authenticationActions.login());
    }

    public dispatchLogout(): void {
        this.store.dispatch(authenticationActions.logout());
    }

    public selectAuthenticatedUser$(): Observable<UserModel> {
        return this.store.pipe(select(authenticationSelectors.selectAuthenticatedUser));
    }

    public selectIsAuthenticated$(): Observable<boolean> {
        return this.store.pipe(select(authenticationSelectors.selectIsAuthenticated));
    }

    public isLoading$(): Observable<boolean> {
        return this.store.pipe(select(authenticationSelectors.selectLoading));
    }
}
