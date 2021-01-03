import { Observable } from 'rxjs';

export abstract class ApeStateService {
    constructor() {}

    public abstract isLoading$(): Observable<boolean>;
}
