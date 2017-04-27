import { OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { RemoveService } from '../../../../common/crud/remove.service';
import { Midia } from '../../models/midia';

export class MidiaDeleteGeneratedComponent implements OnInit {

    @ViewChild('deleteModal')
    public deleteModal: ModalDirective;

    @Output()
    onDelete = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<RemoveService<Midia>>();

    constructor(public remove: RemoveService<Midia>) { }

    ngOnInit(): void {
        this.remove.Start('Midia', this.deleteModal);
        this.remove.onDelete$.subscribe(() => this.onDelete.emit());
        this.instance.emit(this.remove);
    }

}
