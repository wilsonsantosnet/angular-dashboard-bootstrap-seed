import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { RemoveService } from './../common/crud/remove.service';
import { Filter } from './../common/models/filter';
import { FilterService } from './../common/crud/filter.service';
import { SaveService } from './../common/crud/save.service';
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

    constructor(public filter: FilterService<Midia, MidiaFilter>) { }

    ngOnInit() {
        this.filter.Start('Midia', new MidiaFilter());
    }

}
