import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ModalModule } from 'ngx-bootstrap/modal';

import { MakeSelectComponent } from './../common/components/select.component';

import { MidiaRoutingModule } from './routing/midia-routing.module';
import { MidiaComponent } from './midia.component';
import { MidiaDeleteComponent } from './delete/midia-delete.component';
import { MidiaSaveComponent } from './save/midia-save.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MidiaRoutingModule,
        ModalModule.forRoot(),
    ],
    declarations: [MidiaComponent, MakeSelectComponent, MidiaDeleteComponent, MidiaSaveComponent]
})
export class MidiaModule { }
