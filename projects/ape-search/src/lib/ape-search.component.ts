import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { SearchModel } from '@ape-api';

@Component({
    selector: 'lib-ape-search',
    template: `
        <nz-input-group [nzSuffix]="suffixIconSearch">
            <input
                #searchInput
                type="text"
                nz-input
                placeholder="search text"
                [value] = 'searchValue.query'
            />
        </nz-input-group>
        <ng-template #suffixIconSearch>
            <i nz-icon nzType="search"></i>
        </ng-template>
    `,
    styles: [],
})
export class ApeSearchComponent implements AfterViewInit {
    @Output()
    public change: EventEmitter<SearchModel>;
    @ViewChild('searchInput', { static: true })
    searchInput: ElementRef;
    @Input()
    public searchValue: SearchModel = { query: '' };

    public constructor() {
        this.change = new EventEmitter();
    }

    public ngAfterViewInit() {
        this.searchValueChangeHandler();
    }

    public searchValueChangeHandler(): void {
        fromEvent(this.searchInput?.nativeElement, 'input')
            .pipe(debounceTime(300))
            .subscribe((event) => {
                const value = this.searchInput.nativeElement.value;

                this.change.next({
                    query: value
                });
            });
    }
}
