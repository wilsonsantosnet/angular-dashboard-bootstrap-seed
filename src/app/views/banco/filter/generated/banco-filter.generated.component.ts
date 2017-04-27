import { OnInit, Output, EventEmitter } from '@angular/core';

import { FilterService } from '../../../../common/crud/filter.service';
import { BancoFilter } from '../../models/banco.filter';
import { Banco } from '../../models/banco';

export class BancoFilterGeneratedComponent implements OnInit {

    @Output()
    onFilter = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<FilterService<Banco, BancoFilter>>();

    constructor(public filter: FilterService<Banco, BancoFilter>) { }

    ngOnInit(): void {
        this.filter.Start('Banco', new BancoFilter());
        this.filter.onFilter$.subscribe(() => this.onFilter.emit());
        this.instance.emit(this.filter);
    }
}
