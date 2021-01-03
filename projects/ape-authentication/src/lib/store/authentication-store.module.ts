import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AuthenticationStateService } from '@ape-api';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AuthenticationStateServiceImpl } from './authentication-state.service.impl';
import { AuthenticationEffects } from './authentication.effects';
import * as fromAuthentication from './authentication.reducer';

@NgModule({
    imports: [
        CommonModule,
        StoreModule.forFeature(
            'authentication',
            fromAuthentication.authenticationReducer
        ),
        EffectsModule.forFeature([AuthenticationEffects]),
    ],
    providers: [
        {
            provide: AuthenticationStateService,
            useClass: AuthenticationStateServiceImpl,
        },
    ],
})
export class AuthenticationStoreModule {}
