import { Component, OnInit } from '@angular/core';

import { RemoveService } from '../../common/crud/remove.service';
import { FilterService } from '../../common/crud/filter.service';
import { SaveService } from '../../common/crud/save.service';

import { CampanhaFilter } from './models/campanha.filter';
import { Campanha } from './models/campanha';

@Component({
    selector: 'campanha',
    templateUrl: './campanha.component.html',
    providers: [FilterService],
})
export class CampanhaComponent implements OnInit {

    deleteInstance: RemoveService<Campanha>;
    saveInstance: SaveService<Campanha, CampanhaFilter>;
    filterInstance: FilterService<Campanha, CampanhaFilter>;

    constructor() { }

    ngOnInit() { }

}
