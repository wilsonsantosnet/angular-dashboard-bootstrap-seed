import { BancoFilterGeneratedComponent } from './generated/banco-filter.generated.component';
import { Component } from '@angular/core';

import { FilterService } from '../../../common/crud/filter.service';
import { BancoFilter } from '../models/banco.filter';
import { Banco } from '../models/banco';

@Component({
    selector: 'banco-filter',
    templateUrl: './generated/banco-filter.generated.component.html',
    providers: [FilterService],
})

export class BancoFilterComponent extends BancoFilterGeneratedComponent {

    constructor(public filter: FilterService<Banco, BancoFilter>) {
        super(filter);
    }

}
