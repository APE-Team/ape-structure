import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { EntityDataService } from '../../entity';
import { PatientModel } from '../model';

@Injectable()
export abstract class PatientDataService extends EntityDataService {
    public abstract listPatientsByUserId$(userId: string): Observable<PatientModel[]>;
}
