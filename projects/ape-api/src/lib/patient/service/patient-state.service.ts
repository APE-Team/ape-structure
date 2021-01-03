import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { PatientModel } from '../model';
import { BaseStateService } from '../../base';

@Injectable()
export abstract class PatientStateService extends BaseStateService {
    public abstract dispatchListPatientsByUserIdAction(userId: string): void;
    public abstract selectPatientsByUserId$(userId: string): Observable<PatientModel[]>;
}
