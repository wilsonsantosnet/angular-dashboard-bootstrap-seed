import { NgModule } from '@angular/core';

import { CampanhaRoutingModule } from './routing/campanha-routing.module';

import { SharedModule } from './../../common/shared.module.';

import { CampanhaComponent } from './campanha.component';
import { CampanhaDeleteComponent } from './delete/campanha-delete.component';
import { CampanhaSaveComponent } from './save/campanha-save.component';
import { CampanhaFilterComponent } from './filter/campanha-filter.component';
import { CampanhaGridComponent } from './grid/campanha-grid.component';

@NgModule({
    imports: [
        SharedModule,
        CampanhaRoutingModule,
    ],
    declarations: [
        CampanhaComponent,
        CampanhaFilterComponent,
        CampanhaGridComponent,
        CampanhaDeleteComponent,
        CampanhaSaveComponent]
})
export class CampanhaModule { }
