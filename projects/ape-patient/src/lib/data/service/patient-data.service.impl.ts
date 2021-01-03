import { PatientDataService } from 'projects/ape-api/src/lib/patient/service/patient-data.service';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { EntityModel, PatientModel } from '@ape-api';

@Injectable()
export class PatientDataServiceImpl extends PatientDataService {
    private patientMap = new Map();
    private patients: PatientModel[] = [];

    public constructor() {
        super();

        this.initPatients();

        this.patients.forEach((patient) =>
            this.patientMap.set(patient.uid, patient)
        );
    }

    public list$(): Observable<EntityModel[]> {
        return of([]);
    }

    public listPatientsByUserId$(): Observable<PatientModel[]> {
        return of(this.patients);
    }

    public load$(uid: string): Observable<EntityModel> {
        return this.patientMap.get(uid);
    }

    private initPatients(): void {
        this.patients.push({
            uid: '12345678',
            admitDate: 1609694301000,
            bed: 'B',
            birthdate: 1457913600000,
            firstName: 'Ronald',
            gender: 'Male',
            lastName: 'Reid',
            mrn: 466429,
            room: '0105',
            unit: 'Pediatric',
            userIds: ['10101010'],
            weight: 18,
            workingDiagnoses: ['UTI'],
        });

        this.patients.push({
            uid: '12345679',
            admitDate: 1605657600000,
            bed: 'A',
            birthdate: 79056000000,
            firstName: 'Grant',
            gender: 'Male',
            lastName: 'Marshall',
            mrn: 4238638,
            room: '37',
            unit: 'ICU',
            userIds: ['10101010'],
            weight: 82,
            workingDiagnoses: ['COVID-19', 'Ventilator-associated pneumonia'],
        });
    }
}
