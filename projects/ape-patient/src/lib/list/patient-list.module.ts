import { NzTableModule } from 'ng-zorro-antd/table';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PatientListComponent } from './component/patient-list';

@NgModule({
    declarations: [PatientListComponent],
    exports: [PatientListComponent],
    imports: [CommonModule, NzTableModule],
})
export class PatientListModule {}
