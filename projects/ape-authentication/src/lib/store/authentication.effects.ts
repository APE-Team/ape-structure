import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';

@Injectable()
export class AuthenticationEffects {
    public constructor(private actions$: Actions) {}
}
