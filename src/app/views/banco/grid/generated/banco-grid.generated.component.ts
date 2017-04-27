import { BancoFilter } from './../../models/banco.filter';
import { Banco } from './../../models/banco';
import { FilterService } from '../../../../common/crud/filter.service';
import { SaveService } from '../../../../common/crud/save.service';
import { RemoveService } from '../../../../common/crud/remove.service';
import { OnInit, Input } from '@angular/core';

export class BancoGridGeneratedComponent implements OnInit {


    @Input()
    dataList: Banco[];

    @Input()
    deleteInstance: RemoveService<Banco>;

    @Input()
    saveInstance: SaveService<Banco, BancoFilter>;

    @Input()
    filterInstance: FilterService<Banco, BancoFilter>;

    constructor() { }

    ngOnInit(): void { }

}
