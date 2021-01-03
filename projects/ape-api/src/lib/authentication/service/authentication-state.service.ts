import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { ApeStateService } from '../../store';
import { UserModel } from '../../user';

@Injectable()
export abstract class AuthenticationStateService extends ApeStateService {
    public abstract dispatchLogin(): void;
    public abstract dispatchLogout(): void;
    public abstract selectAuthenticatedUser$(): Observable<UserModel>;
    public abstract selectIsAuthenticated$(): Observable<boolean>;
}
