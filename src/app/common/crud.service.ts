import { controlPath } from '@angular/forms/src/directives/shared';
import { Injectable } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Dto } from './dto';
import { Filter } from './filter';
import { ApiService } from './api.service';

@Injectable()
export class CrudService<T extends Dto, TFilter extends Filter> extends ApiService<T> {

    public itens: T[];
    public model: T;
    public filter: TFilter;
    public saveModal: ModalDirective;
    public deleteModal: ModalDirective;

    public Start(resource: string, startModel: T, startFilters: TFilter, createModal: ModalDirective, deleteModal: ModalDirective) {
        this.resource = resource;
        this.model = startModel;
        this.filter = startFilters;
        this.saveModal = createModal;
        this.deleteModal = deleteModal;
        this.Load();
    }

    public ExecuteFilter() {
        this.Load(this.filter);
    }

    public ExecuteEdit(id) {
        this.filter.Id = id;
        this.Get(this.filter).subscribe(data => this.CallbackExecuteEdit(data.Data));
    }

    public ExecuteCreate() {
        this.saveModal.show();
    }

    public ExecuteDelete(data: T) {
        this.model = data;
        this.deleteModal.show();
    }

    public ConfirmSave() {
        this.Post(this.model).subscribe(data => this.CallbackConfirmSave(data.Data));
    }

    public ConfirmDelete() {
        this.Delete(this.model).subscribe(data => this.CallbackConfirmDelete(data.Data));
    }

    public Load(filters?: TFilter) {
        this.Get(filters).subscribe(data => this.itens = data.DataList);
    }

    private CallbackConfirmSave(data: T) {
        this.saveModal.hide();
        this.Load();
    }

    private CallbackConfirmDelete(data: T) {
        this.deleteModal.hide();
        this.Load();
    }
    private CallbackExecuteEdit(data: T) {
        this.filter.Id = null;
        this.model = data;
        this.saveModal.show();
    }
}
