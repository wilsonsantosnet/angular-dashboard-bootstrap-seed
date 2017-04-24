import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ngx-bootstrap/modal';
import { PaginationModule } from 'ngx-bootstrap/pagination';

import { MidiaRoutingModule } from './routing/midia-routing.module';

import { MakeSelectComponent } from './../common/components/select.component';
import { MakePaginationComponent } from './../common/components/pagination.component';

import { MidiaComponent } from './midia.component';
import { MidiaDeleteComponent } from './delete/midia-delete.component';
import { MidiaSaveComponent } from './save/midia-save.component';
import { MidiaFilterComponent } from './filter/midia-filter.component';
import { MidiaGridComponent } from './grid/midia-grid.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MidiaRoutingModule,
        ModalModule.forRoot(),
        PaginationModule.forRoot(),
    ],
    declarations: [
        MidiaComponent,
        MidiaFilterComponent,
        MidiaGridComponent,
        MidiaDeleteComponent,
        MidiaSaveComponent,
        MakeSelectComponent,
        MakePaginationComponent]
})
export class MidiaModule { }
