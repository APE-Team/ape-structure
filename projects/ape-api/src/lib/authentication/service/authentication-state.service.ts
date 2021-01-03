import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { BaseStateService } from '../../base';
import { UserModel } from '../../user';

@Injectable()
export abstract class AuthenticationStateService extends BaseStateService {
    public abstract dispatchAuthenticated(user: UserModel): void;
    public abstract dispatchLogin(): void;
    public abstract dispatchLogout(): void;
    public abstract isAuthenticated$(): Observable<boolean>;
    public abstract selectAuthenticatedUser$(): Observable<UserModel>;
}
