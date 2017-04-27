import { Component, OnInit } from '@angular/core';

import { RemoveService } from '../../common/crud/remove.service';
import { FilterService } from '../../common/crud/filter.service';
import { SaveService } from '../../common/crud/save.service';

import { DadosBancariosFilter } from './models/dadosbancarios.filter';
import { DadosBancarios } from './models/dadosbancarios';

@Component({
    selector: 'dadosbancarios',
    templateUrl: './dadosbancarios.component.html',
    providers: [FilterService],
})
export class DadosBancariosComponent implements OnInit {

    deleteInstance: RemoveService<DadosBancarios>;
    saveInstance: SaveService<DadosBancarios, DadosBancariosFilter>;
    filterInstance: FilterService<DadosBancarios, DadosBancariosFilter>;

    constructor() { }

    ngOnInit() { }

}
