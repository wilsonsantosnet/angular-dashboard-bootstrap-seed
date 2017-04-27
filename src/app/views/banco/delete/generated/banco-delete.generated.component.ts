import { OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { RemoveService } from '../../../../common/crud/remove.service';
import { Banco } from '../../models/banco';

export class BancoDeleteGeneratedComponent implements OnInit {

    @ViewChild('deleteModal')
    public deleteModal: ModalDirective;

    @Output()
    onDelete = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<RemoveService<Banco>>();

    constructor(public remove: RemoveService<Banco>) { }

    ngOnInit(): void {
        this.remove.Start('Banco', this.deleteModal);
        this.remove.onDelete$.subscribe(() => this.onDelete.emit());
        this.instance.emit(this.remove);
    }

}
