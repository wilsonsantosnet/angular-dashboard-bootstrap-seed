import { NgModule } from '@angular/core';

import { DadosBancariosRoutingModule } from './routing/dadosbancarios-routing.module';

import { SharedModule } from './../../common/shared.module.';

import { DadosBancariosComponent } from './dadosbancarios.component';
import { DadosBancariosDeleteComponent } from './delete/dadosbancarios-delete.component';
import { DadosBancariosSaveComponent } from './save/dadosbancarios-save.component';
import { DadosBancariosFilterComponent } from './filter/dadosbancarios-filter.component';
import { DadosBancariosGridComponent } from './grid/dadosbancarios-grid.component';

@NgModule({
    imports: [
        SharedModule,
        DadosBancariosRoutingModule,
    ],
    declarations: [
        DadosBancariosComponent,
        DadosBancariosFilterComponent,
        DadosBancariosGridComponent,
        DadosBancariosDeleteComponent,
        DadosBancariosSaveComponent]
})
export class DadosBancariosModule { }
