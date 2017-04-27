import { OnInit, Output, EventEmitter } from '@angular/core';

import { FilterService } from '../../../../common/crud/filter.service';
import { DadosBancariosFilter } from '../../models/dadosbancarios.filter';
import { DadosBancarios } from '../../models/dadosbancarios';

export class DadosBancariosFilterGeneratedComponent implements OnInit {

    @Output()
    onFilter = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<FilterService<DadosBancarios, DadosBancariosFilter>>();

    constructor(public filter: FilterService<DadosBancarios, DadosBancariosFilter>) { }

    ngOnInit(): void {
        this.filter.Start('DadosBancarios', new DadosBancariosFilter());
        this.filter.onFilter$.subscribe(() => this.onFilter.emit());
        this.instance.emit(this.filter);
    }
}
