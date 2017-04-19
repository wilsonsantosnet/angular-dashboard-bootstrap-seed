import { DataItem } from './data-item';
import { ApiService } from './api.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * Cria um select - tem dependência de ApiService
 * Exemplo
 * `<make-select (ngModelChange)="crud.filter.CampanhaId = $event" [dataitem]="'Campanha'" [value]="crud.model.CampanhaId"></make-select>`
 * Injetar esse component no módulo onde for utilizar
 * @constructor
 */
@Component({
    selector: 'make-select',
    template: `
        <select [(ngModel)]="value" class="form-control" (change)="onChange()">
            <option [value]="undefined">Selecione</option>
            <option *ngFor="let option of options" [value]="option.Id">{{ option.Name }}</option>
        </select>
    `,
    providers: [ApiService],
})
export class MakeSelectComponent implements OnInit {

    /**
    * Resource onde será feito o request
    * Exemplo `[dataitem]="'Campanha'"`
    */
    @Input()
    dataitem: string;

    /**
    * Changes do feitos no select
    * Exemplo `(ngModelChange)="crud.filter.CampanhaId = $event"`
    */
    @Output()
    ngModelChange = new EventEmitter<number>();

    /**
    * Valor inicial que virá no select
    * Exemplo `[value]="crud.model.CampanhaId"`
    */
    @Input()
    value: number;

    public options: any[];

    constructor(public api: ApiService<DataItem>) { }

    onChange() {
        this.ngModelChange.emit(this.value);
    }

    ngOnInit() {
        this.api.setResource(this.dataitem);
        this.api.GetDataItem().subscribe(data => this.options = data.DataList);
    }

}
