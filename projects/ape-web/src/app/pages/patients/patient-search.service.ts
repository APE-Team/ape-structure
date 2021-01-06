import { Injectable } from '@angular/core';
import { SearchModel, SearchTypeModel } from '@ape-api';
import { ApeSearchService } from '@ape-search';

@Injectable()
export class PatientSearchService extends ApeSearchService {
    public constructor() {
        super();
    }

    public getDefaultValue(): SearchModel {
        return {
            query: '',
        };
    }

    public getSearchTypes(): SearchTypeModel[] {
        return [
            {
                property: 'firstName',
            },
            {
                property: 'lastName',
            },
            {
                property: 'workingDiagnose',
            },
            {
                property: 'unit',
            },
            {
                property: 'room',
            },
            {
                property: 'bad',
            },
        ];
    }
}
