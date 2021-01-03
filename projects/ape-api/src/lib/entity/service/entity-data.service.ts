import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { BaseDataService } from '../../base';
import { EntityModel } from '../model';

@Injectable()
export abstract class EntityDataService extends BaseDataService {
    public readonly SEPARATOR: string = '_';

    public constructor() {
        super();
    }

    public abstract list$(): Observable<EntityModel[]>;
    public abstract load$(uid: string): Observable<EntityModel>;
}
