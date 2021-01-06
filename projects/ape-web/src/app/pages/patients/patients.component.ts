import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import {
    AuthenticationStateService,
    PatientModel,
    PatientStateService,
} from '@ape-api';
import { filter, map, switchMap } from 'rxjs/operators';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
    public patients$: Observable<PatientModel[]>;

    public constructor(
        private authenticationStateService: AuthenticationStateService,
        private patientStateService: PatientStateService
    ) {}

    public ngOnInit() {
        this.patients$ = this.authenticationStateService.selectAuthenticatedUser$().pipe(
            switchMap(authenticatedUser => {
                this.patientStateService.dispatchListPatientsByUserIdAction(authenticatedUser.uid);

                return this.patientStateService.selectPatientsByUserId$(authenticatedUser.uid);
            })
        );
    }
}
