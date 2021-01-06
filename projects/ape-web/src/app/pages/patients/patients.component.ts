import { ApeSearchComponent } from 'projects/ape-search/src/lib/ape-search.component';
import { BehaviorSubject, combineLatest, Observable, Subject } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

import { Component, OnInit, ViewChild } from '@angular/core';
import {
    AuthenticationStateService,
    PatientModel,
    PatientStateService,
    SearchModel,
} from '@ape-api';

import { PatientSearchService } from './patient-search.service';

@Component({
    selector: 'app-patients',
    templateUrl: './patients.component.html',
    styleUrls: ['./patients.component.scss'],
})
export class PatientsComponent implements OnInit {
    private patientSearch$$: Subject<SearchModel>;

    public patients$$: Subject<PatientModel[]>;

    public constructor(
        private authenticationStateService: AuthenticationStateService,
        private patientSearchService: PatientSearchService,
        private patientStateService: PatientStateService
    ) {
        this.patients$$ = new Subject();
        this.patientSearch$$ = new BehaviorSubject(
            this.patientSearchService.getDefaultValue()
        );
    }

    public ngOnInit() {
        combineLatest([
            this.authenticationStateService.selectAuthenticatedUser$().pipe(
                switchMap((authenticatedUser) => {
                    this.patientStateService.dispatchListPatientsByUserIdAction(
                        authenticatedUser.id
                    );

                    return this.patientStateService.selectPatientsByUserId$(
                        authenticatedUser.id
                    );
                }),
                tap((patients) => {
                    this.patientSearchService.createIndex(
                        patients,
                        false,
                        'id'
                    );
                })
            ),
            this.patientSearch$$,
        ]).pipe(tap(([patients, patientSearch]) => {
            console.log(patientSearch);

            const result = this.patientSearchService.search(patientSearch).result;
            const resultIds = result.map(entity => entity['ref']);

            console.log(result);

            this.patients$$.next(patients.filter(patient => resultIds.includes(patient.id)));
        })).subscribe();
    }

    public searchChangeHandler(search: SearchModel): void {
        this.patientSearch$$.next(search);
    }
}
