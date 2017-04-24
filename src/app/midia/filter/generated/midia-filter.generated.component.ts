import { OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { FilterService } from '../../../common/crud/filter.service';
import { MidiaFilter } from '../../models/midia.filter';
import { Midia } from '../../models/midia';

export class MidiaFilterGeneratedComponent implements OnInit {

    @Output()
    onFilter = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<FilterService<Midia, MidiaFilter>>();

    constructor(public filter: FilterService<Midia, MidiaFilter>) { }

    ngOnInit(): void {
        this.filter.Start('Midia', new MidiaFilter());
        this.filter.onFilter$.subscribe(() => this.onFilter.emit());
        this.instance.emit(this.filter);
    }
}
