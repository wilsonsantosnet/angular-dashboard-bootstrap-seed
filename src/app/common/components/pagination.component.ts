import { FilterService } from './../crud/filter.service';
import { Dto } from './../models/dto';
import { Filter } from './../models/filter';
import { DataItem } from '../models/data-item';
import { ApiService } from '../rest/api.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'make-pagination',
    template: `
        <pagination 
            (pageChanged)="filterInstance.pageChanged($event)" 
            [itemsPerPage]="filterInstance.model.PageSize" 
            [totalItems]="filterInstance.totalItens" 
            [previousText]="'Anterior'"
            [nextText]="'Próximo'" 
            [maxSize]="5" 
            [rotate]="true">
        </pagination>

        <div class="pull-right">
            <h4>
                Total de registros: <span class="label label-primary">{{ filterInstance.totalItens }}</span>
            </h4>
        </div>
    `,
})
export class MakePaginationComponent {

    @Input()
    filterInstance: FilterService<Dto, Filter>;

    constructor() { }


}
