import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { PatientStateServiceImpl } from './patient-state.service.impl';

describe('PatientStateServiceImpl', () => {
    beforeEach(() =>
        TestBed.configureTestingModule({
            imports: [StoreModule.forRoot({})],
            providers: [PatientStateServiceImpl],
        })
    );

    it('should be created', () => {
        const service: PatientStateServiceImpl = TestBed.inject(
            PatientStateServiceImpl
        );

        expect(service).toBeTruthy();
    });
});
