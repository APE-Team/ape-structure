import { Injectable } from '@angular/core';

import { UserModel } from '../../user';

@Injectable()
export abstract class AuthenticationService {
    public abstract login(user: UserModel): void;
    public abstract logout(): void;
}
