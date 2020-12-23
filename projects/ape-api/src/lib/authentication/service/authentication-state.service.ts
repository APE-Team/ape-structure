import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { AspStateService } from '../../store';
import { UserModel } from '../../user';

@Injectable()
export abstract class AuthenticationStateService extends AspStateService {
    public abstract dispatchLogin(): void;
    public abstract dispatchLogout(): void;
    public abstract selectAuthenticatedUser$(): Observable<UserModel>;
}
