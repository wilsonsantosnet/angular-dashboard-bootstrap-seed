import { DadosBancariosFilter } from './../../models/dadosbancarios.filter';
import { DadosBancarios } from './../../models/dadosbancarios';
import { FilterService } from '../../../../common/crud/filter.service';
import { SaveService } from '../../../../common/crud/save.service';
import { RemoveService } from '../../../../common/crud/remove.service';
import { OnInit, Input } from '@angular/core';

export class DadosBancariosGridGeneratedComponent implements OnInit {


    @Input()
    dataList: DadosBancarios[];

    @Input()
    deleteInstance: RemoveService<DadosBancarios>;

    @Input()
    saveInstance: SaveService<DadosBancarios, DadosBancariosFilter>;

    @Input()
    filterInstance: FilterService<DadosBancarios, DadosBancariosFilter>;

    constructor() { }

    ngOnInit(): void { }

}
