import { Component, OnInit } from '@angular/core';

import { RemoveService } from '../../common/crud/remove.service';
import { FilterService } from '../../common/crud/filter.service';
import { SaveService } from '../../common/crud/save.service';

import { BancoFilter } from './models/banco.filter';
import { Banco } from './models/banco';

@Component({
    selector: 'banco',
    templateUrl: './banco.component.html',
    providers: [FilterService],
})
export class BancoComponent implements OnInit {

    deleteInstance: RemoveService<Banco>;
    saveInstance: SaveService<Banco, BancoFilter>;
    filterInstance: FilterService<Banco, BancoFilter>;

    constructor() { }

    ngOnInit() { }

}
