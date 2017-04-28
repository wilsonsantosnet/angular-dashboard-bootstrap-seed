import { NgModule } from '@angular/core';

import { BancoRoutingModule } from './routing/banco-routing.module';

import { SharedModule } from './../../common/shared.module';

import { BancoComponent } from './banco.component';
import { BancoDeleteComponent } from './delete/banco-delete.component';
import { BancoSaveComponent } from './save/banco-save.component';
import { BancoFilterComponent } from './filter/banco-filter.component';
import { BancoGridComponent } from './grid/banco-grid.component';

@NgModule({
    imports: [
        SharedModule,
        BancoRoutingModule,
    ],
    declarations: [
        BancoComponent,
        BancoFilterComponent,
        BancoGridComponent,
        BancoDeleteComponent,
        BancoSaveComponent]
})
export class BancoModule { }
