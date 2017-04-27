import { OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { SaveService } from '../../../../common/crud/save.service';
import { BancoFilter } from '../../models/banco.filter';
import { Banco } from '../../models/banco';

export class BancoSaveGeneratedComponent implements OnInit {

    @ViewChild('saveModal')
    public saveModal: ModalDirective;

    @Output()
    onSave = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<SaveService<Banco, BancoFilter>>();

    constructor(public save: SaveService<Banco, BancoFilter>) { }

    ngOnInit(): void {
        this.save.Start('Banco', new Banco(), new BancoFilter(), this.saveModal);
        this.save.onSave$.subscribe(() => this.onSave.emit());
        this.instance.emit(this.save);
    }

}
