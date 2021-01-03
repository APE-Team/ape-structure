import { PatientDataService } from 'projects/ape-api/src/lib/patient/service/patient-data.service';
import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { EntityModel, PatientModel } from '@ape-api';

@Injectable()
export class PatientDataServiceImpl extends PatientDataService {
    private patients: PatientModel[] = [];
    private patientMap = new Map();
  
    public constructor() {
        super();

        this.patients.push({
          uid: '12345678',
          admitDate: 1609694301000,
          bed: 'B',
          birthDate: 1457913600000,
          firstName: 'Ronald',
          gender: 'Male',
          lastName: 'Reid',
          mrn: 466429,
          room: '0105',
          unit: 'Pediatric',
          weight: 18,
          workingDiagnoses: [
            'UTI'
          ]
        });

        this.patients.forEach(patient => this.patientMap.set(patient.uid, patient));
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

   
}
