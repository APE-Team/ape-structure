import { Component, Input, OnInit } from '@angular/core';
import { PatientModel } from '@ape-api';

@Component({
    selector: 'lib-patient-list',
    templateUrl: './patient-list.component.html',
    styleUrls: ['./patient-list.component.css'],
})
export class PatientListComponent implements OnInit {
    @Input()
    public patients: PatientModel[] = [];

    public constructor() {}

    public ngOnInit(): void {}
}
