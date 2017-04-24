import { MidiaFilterGeneratedComponent } from './generated/midia-filter.generated.component';
import { Component } from '@angular/core';

import { FilterService } from '../../common/crud/filter.service';
import { MidiaFilter } from '../models/midia.filter';
import { Midia } from '../models/midia';

@Component({
    selector: 'midia-filter',
    templateUrl: './generated/midia-filter.generated.component.html',
    providers: [FilterService],
})

export class MidiaFilterComponent extends MidiaFilterGeneratedComponent {

    constructor(public filter: FilterService<Midia, MidiaFilter>) {
        super(filter);
    }

}
