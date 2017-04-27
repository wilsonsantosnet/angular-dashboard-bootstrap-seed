import { OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { SaveService } from '../../../../common/crud/save.service';
import { DadosBancariosFilter } from '../../models/dadosbancarios.filter';
import { DadosBancarios } from '../../models/dadosbancarios';

export class DadosBancariosSaveGeneratedComponent implements OnInit {

    @ViewChild('saveModal')
    public saveModal: ModalDirective;

    @Output()
    onSave = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<SaveService<DadosBancarios, DadosBancariosFilter>>();

    constructor(public save: SaveService<DadosBancarios, DadosBancariosFilter>) { }

    ngOnInit(): void {
        this.save.Start('DadosBancarios', new DadosBancarios(), new DadosBancariosFilter(), this.saveModal);
        this.save.onSave$.subscribe(() => this.onSave.emit());
        this.instance.emit(this.save);
    }

}
