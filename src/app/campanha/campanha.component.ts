import { CrudService } from './../common/crud.service';
import { CampanhaFilter } from './campanha.filter';
import { ModalDirective } from 'ng2-bootstrap/modal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Campanha } from './campanha';

@Component({
    selector: 'campanha',
    templateUrl: './campanha.component.html',
    providers: [CrudService],
})
export class CampanhaComponent implements OnInit {

    @ViewChild('createModal') public createModal: ModalDirective;
    @ViewChild('deleteModal') public deleteModal: ModalDirective;

    constructor(public crud: CrudService<Campanha, CampanhaFilter>) { }

    ngOnInit() {
        this.crud.Start(
            'Campanha',
            new CampanhaFilter(),
            new Campanha(),
            this.createModal,
            this.deleteModal,
        );
    }

}
