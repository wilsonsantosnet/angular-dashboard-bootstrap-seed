import { CampanhaFilterGeneratedComponent } from './generated/campanha-filter.generated.component';
import { Component } from '@angular/core';

import { FilterService } from '../../../common/crud/filter.service';
import { CampanhaFilter } from '../models/campanha.filter';
import { Campanha } from '../models/campanha';

@Component({
    selector: 'campanha-filter',
    templateUrl: './generated/campanha-filter.generated.component.html',
    providers: [FilterService],
})

export class CampanhaFilterComponent extends CampanhaFilterGeneratedComponent {

    constructor(public filter: FilterService<Campanha, CampanhaFilter>) {
        super(filter);
    }

}
