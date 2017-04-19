import { Filter } from './../common/filter';
import { CrudService } from './../common/crud.service';
import { CampanhaFilter } from './campanha.filter';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { Campanha } from './campanha';

@Component({
    selector: 'delete-campanha',
    template: `
        <div bsModal #deleteModal="bs-modal" class="modal fade">
        <div class="modal-dialog modal-sm">
            <div class="modal-content">
                <div class="modal-header alert-danger">
                    <h4 class="modal-title pull-left">Confirmação de exclusão</h4>
                    <button type="button" class="close pull-right" aria-label="Close" (click)="deleteModal.hide()">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form (ngSubmit)="crud.ConfirmDelete()" #deleteForm="ngForm">
                        <h4>Confirma a remoção deste item?</h4>
                    </form>
                </div>
                <div class="modal-footer">
                    <button class="btn btn-default" type="button" (click)="deleteModal.hide()">Cancelar</button>
                    <button type="submit" class="btn btn-danger" (click)="deleteForm.ngSubmit.emit()">Confirmar</button>
                </div>
            </div>
        </div>
    </div>
    `,
})

export class DeleteCampanhaComponent implements OnInit {

    @ViewChild('deleteModal')
    public deleteModal: ModalDirective;

    @Input()
    crud: CrudService<Campanha, CampanhaFilter>;

    @Output()
    deleteModalInstance = new EventEmitter<ModalDirective>();

    constructor() { }

    ngOnInit(): void {
        console.log('init delete');
        this.deleteModalInstance.emit(this.deleteModal);
    }

}
