import { NgModule } from '@angular/core';

import { MidiaRoutingModule } from './routing/midia-routing.module';

import { SharedModule } from './../../common/shared.module';

import { MidiaComponent } from './midia.component';
import { MidiaDeleteComponent } from './delete/midia-delete.component';
import { MidiaSaveComponent } from './save/midia-save.component';
import { MidiaFilterComponent } from './filter/midia-filter.component';
import { MidiaGridComponent } from './grid/midia-grid.component';

@NgModule({
    imports: [
        SharedModule,
        MidiaRoutingModule,
    ],
    declarations: [
        MidiaComponent,
        MidiaFilterComponent,
        MidiaGridComponent,
        MidiaDeleteComponent,
        MidiaSaveComponent]
})
export class MidiaModule { }
