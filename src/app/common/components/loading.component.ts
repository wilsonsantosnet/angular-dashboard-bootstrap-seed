import { FilterService } from './../crud/filter.service';
import { Dto } from './../models/dto';
import { Filter } from './../models/filter';
import { DataItem } from '../models/data-item';
import { ApiService } from '../rest/api.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GlobalVariableService } from './../global.module';

@Component({
    selector: 'loading',
    template: `
    <div class="loader" [hidden]="!global.REQUESTING">
        <img src="../../../assets/images/loading.svg" alt="carregando..." />
    </div>`,
})
export class LoadingComponent {

    constructor(private global: GlobalVariableService) { }


}
