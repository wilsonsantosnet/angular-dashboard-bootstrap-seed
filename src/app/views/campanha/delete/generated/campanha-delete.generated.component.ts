import { OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { RemoveService } from '../../../../common/crud/remove.service';
import { Campanha } from '../../models/campanha';

export class CampanhaDeleteGeneratedComponent implements OnInit {

    @ViewChild('deleteModal')
    public deleteModal: ModalDirective;

    @Output()
    onDelete = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<RemoveService<Campanha>>();

    constructor(public remove: RemoveService<Campanha>) { }

    ngOnInit(): void {
        this.remove.Start('Campanha', this.deleteModal);
        this.remove.onDelete$.subscribe(() => this.onDelete.emit());
        this.instance.emit(this.remove);
    }

}
