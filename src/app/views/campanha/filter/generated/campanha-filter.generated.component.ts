import { OnInit, Output, EventEmitter } from '@angular/core';

import { FilterService } from '../../../../common/crud/filter.service';
import { CampanhaFilter } from '../../models/campanha.filter';
import { Campanha } from '../../models/campanha';

export class CampanhaFilterGeneratedComponent implements OnInit {

    @Output()
    onFilter = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<FilterService<Campanha, CampanhaFilter>>();

    constructor(public filter: FilterService<Campanha, CampanhaFilter>) { }

    ngOnInit(): void {
        this.filter.Start('Campanha', new CampanhaFilter());
        this.filter.onFilter$.subscribe(() => this.onFilter.emit());
        this.instance.emit(this.filter);
    }
}
