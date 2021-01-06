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
    @Input()
    isTrim: boolean = true;
    @Output()
    public searchChange: EventEmitter<SearchModel>;
    @ViewChild('searchInput', { static: true })
    searchInput: ElementRef;
    @Input()
    public searchValue: SearchModel = { query: '' };

    public constructor() {
        this.searchChange = new EventEmitter();
    }

    public ngAfterViewInit() {
        this.searchValueChangeHandler();
    }

    public searchValueChangeHandler(): void {
        fromEvent(this.searchInput?.nativeElement, 'input')
            .pipe(debounceTime(300))
            .subscribe((event) => {
                let value: string = this.searchInput.nativeElement.value;

                value = this.isTrim ? value.replace(/ {1,}/g," ").trim() : value;

                this.searchChange.next({
                    query: value
                });
            });
    }
}
