import { OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { SaveService } from '../../../../common/crud/save.service';
import { MidiaFilter } from '../../models/midia.filter';
import { Midia } from '../../models/midia';

export class MidiaSaveGeneratedComponent implements OnInit {

    @ViewChild('saveModal')
    public saveModal: ModalDirective;

    @Output()
    onSave = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<SaveService<Midia, MidiaFilter>>();

    constructor(public save: SaveService<Midia, MidiaFilter>) { }

    ngOnInit(): void {
        this.save.Start('Midia', new Midia(), new MidiaFilter(), this.saveModal);
        this.save.onSave$.subscribe(() => this.onSave.emit());
        this.instance.emit(this.save);
    }

}
