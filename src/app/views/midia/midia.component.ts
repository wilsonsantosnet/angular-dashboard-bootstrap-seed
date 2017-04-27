import { Component, OnInit } from '@angular/core';

import { RemoveService } from '../../common/crud/remove.service';
import { FilterService } from '../../common/crud/filter.service';
import { SaveService } from '../../common/crud/save.service';

import { MidiaFilter } from './models/midia.filter';
import { Midia } from './models/midia';

@Component({
    selector: 'midia',
    templateUrl: './midia.component.html',
    providers: [FilterService],
})
export class MidiaComponent implements OnInit {

    deleteInstance: RemoveService<Midia>;
    saveInstance: SaveService<Midia, MidiaFilter>;
    filterInstance: FilterService<Midia, MidiaFilter>;

    constructor() { }

    ngOnInit() { }

}
