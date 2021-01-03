import { Observable } from 'rxjs';

export abstract class BaseStateService {
    constructor() {}

    public abstract isLoading$(): Observable<boolean>;
}
