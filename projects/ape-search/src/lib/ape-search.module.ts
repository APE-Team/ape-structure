import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzInputModule } from 'ng-zorro-antd/input';

import { NgModule } from '@angular/core';

import { ApeSearchComponent } from './ape-search.component';

@NgModule({
    declarations: [ApeSearchComponent],
    exports: [ApeSearchComponent],
    imports: [NzIconModule, NzInputModule],
})
export class ApeSearchModule {}
