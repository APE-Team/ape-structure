import { Observable } from 'rxjs';

import { PatientEffects } from './patient.effects';

describe('PatientEffects', () => {
    let actions$: Observable<any>;
    let effects: PatientEffects;

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
