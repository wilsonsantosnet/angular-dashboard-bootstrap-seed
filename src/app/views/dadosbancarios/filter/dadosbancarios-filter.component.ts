import { DadosBancariosFilterGeneratedComponent } from './generated/dadosbancarios-filter.generated.component';
import { Component } from '@angular/core';

import { FilterService } from '../../../common/crud/filter.service';
import { DadosBancariosFilter } from '../models/dadosbancarios.filter';
import { DadosBancarios } from '../models/dadosbancarios';

@Component({
    selector: 'dadosbancarios-filter',
    templateUrl: './generated/dadosbancarios-filter.generated.component.html',
    providers: [FilterService],
})

export class DadosBancariosFilterComponent extends DadosBancariosFilterGeneratedComponent {

    constructor(public filter: FilterService<DadosBancarios, DadosBancariosFilter>) {
        super(filter);
    }

}
