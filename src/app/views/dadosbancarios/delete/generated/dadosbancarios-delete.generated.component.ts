import { OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { RemoveService } from '../../../../common/crud/remove.service';
import { DadosBancarios } from '../../models/dadosbancarios';

export class DadosBancariosDeleteGeneratedComponent implements OnInit {

    @ViewChild('deleteModal')
    public deleteModal: ModalDirective;

    @Output()
    onDelete = new EventEmitter<void>();

    @Output()
    instance = new EventEmitter<RemoveService<DadosBancarios>>();

    constructor(public remove: RemoveService<DadosBancarios>) { }

    ngOnInit(): void {
        this.remove.Start('DadosBancarios', this.deleteModal);
        this.remove.onDelete$.subscribe(() => this.onDelete.emit());
        this.instance.emit(this.remove);
    }

}
