import { CampanhaFilter } from './../../models/campanha.filter';
import { Campanha } from './../../models/campanha';
import { FilterService } from '../../../../common/crud/filter.service';
import { SaveService } from '../../../../common/crud/save.service';
import { RemoveService } from '../../../../common/crud/remove.service';
import { OnInit, Input } from '@angular/core';

export class CampanhaGridGeneratedComponent implements OnInit {


    @Input()
    dataList: Campanha[];

    @Input()
    deleteInstance: RemoveService<Campanha>;

    @Input()
    saveInstance: SaveService<Campanha, CampanhaFilter>;

    @Input()
    filterInstance: FilterService<Campanha, CampanhaFilter>;

    constructor() { }

    ngOnInit(): void { }

}
