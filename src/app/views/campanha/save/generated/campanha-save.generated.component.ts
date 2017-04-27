import { OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { SaveService } from '../../../../common/crud/save.service';
import { CampanhaFilter } from '../../models/campanha.filter';
import { Campanha } from '../../models/campanha';

export class CampanhaSaveGeneratedComponent implements OnInit {

    @ViewChild('saveModal')
    public saveModal: ModalDirective;

    @Output()
    onSave = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<SaveService<Campanha, CampanhaFilter>>();

    constructor(public save: SaveService<Campanha, CampanhaFilter>) { }

    ngOnInit(): void {
        this.save.Start('Campanha', new Campanha(), new CampanhaFilter(), this.saveModal);
        this.save.onSave$.subscribe(() => this.onSave.emit());
        this.instance.emit(this.save);
    }

}
