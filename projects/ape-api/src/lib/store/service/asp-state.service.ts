import { Observable } from 'rxjs';

export abstract class AspStateService {
    constructor() {}

    public abstract isLoading$(): Observable<boolean>;
}
