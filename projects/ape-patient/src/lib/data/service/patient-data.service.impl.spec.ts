import { TestBed } from '@angular/core/testing';

import { PatientDataServiceImpl } from './patient-data.service.impl';

describe('PatientDataService', () => {
    let service: PatientDataServiceImpl;

    beforeEach(() => {
        TestBed.configureTestingModule({});
        service = TestBed.inject(PatientDataServiceImpl);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });
});
