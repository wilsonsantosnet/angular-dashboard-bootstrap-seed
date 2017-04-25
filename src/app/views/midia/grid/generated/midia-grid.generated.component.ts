import { MidiaFilter } from './../../models/midia.filter';
import { Midia } from './../../models/midia';
import { FilterService } from '../../../../common/crud/filter.service';
import { SaveService } from '../../../../common/crud/save.service';
import { RemoveService } from '../../../../common/crud/remove.service';
import { OnInit, Input } from '@angular/core';

export class MidiaGridGeneratedComponent implements OnInit {


    @Input()
    dataList: Midia[];

    @Input()
    deleteInstance: RemoveService<Midia>;

    @Input()
    saveInstance: SaveService<Midia, MidiaFilter>;

    @Input()
    filterInstance: FilterService<Midia, MidiaFilter>;

    constructor() { }

    ngOnInit(): void { }

}
