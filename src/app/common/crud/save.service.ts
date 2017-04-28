import { DataItem } from './../models/data-item';
import { controlPath } from '@angular/forms/src/directives/shared';
import { Injectable } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Dto } from '../models/dto';
import { Filter } from '../models/filter';
import { ApiService } from '../rest/api.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SaveService<T extends Dto, TFilter extends Filter> extends ApiService<T> {

    public itens: T[];
    public model: T;
    public startModel: T;
    public modalInstance: ModalDirective;
    public filter: TFilter;

    public callBack = new Subject<string>();

    public isCreate: boolean;
    public isEdit: boolean;

    onSave$ = this.callBack.asObservable();

    public Start(resource: string, startModel: T, startFilter, modalInstance: ModalDirective) {
        this.resource = resource;
        this.startModel = startModel;
        this.model = startModel;
        this.filter = startFilter;
        this.modalInstance = modalInstance;
    }

    public ExecuteEdit(id) {
        this.filter.Id = id;
        this.Get(this.filter).subscribe(data => this.CallbackExecuteEdit(data.Data));
        this.SetEditAction();
    }

    public ExecuteCreate() {
        this.model = this.startModel;
        this.modalInstance.show();
        this.SetCreateAction();
    }

    public ConfirmSave() {
        this.Post(this.model).subscribe(data => this.CallbackConfirmSave(data.Data));
    }

    private CallbackConfirmSave(data: T) {

        if (this.isCreate) {
            this.successNotification('Registro criado com sucesso');
        }

        if (this.isEdit) {
            this.successNotification('Registro alterado com sucesso');
        }

        this.modalInstance.hide();
        this.callBack.next();
    }

    private CallbackExecuteEdit(data: T) {
        this.filter.Id = null;
        this.model = data;
        this.modalInstance.show();
    }



    private SetEditAction() {
        this.isCreate = false;
        this.isEdit = true;
    }

    private SetCreateAction() {
        this.isCreate = true;
        this.isEdit = false;
    }

}
