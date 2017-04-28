import { DataItem } from './../models/data-item';
import { controlPath } from '@angular/forms/src/directives/shared';
import { Injectable } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';

import { Dto } from '../models/dto';
import { ApiService } from '../rest/api.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RemoveService<T extends Dto> extends ApiService<T> {

    public itens: T[];
    public model: T;
    public modalInstance: ModalDirective;
    public callBack = new Subject<string>();

    onDelete$ = this.callBack.asObservable();

    public Start(resource: string, modalInstance: ModalDirective) {
        this.resource = resource;
        this.modalInstance = modalInstance;
    }

    public ExecuteDelete(data: T) {
        this.model = data;
        this.modalInstance.show();
    }

    public ConfirmDelete() {
        this.Delete(this.model).subscribe(data => this.CallbackConfirmDelete(data.Data));
    }

    private CallbackConfirmDelete(data: T) {
        this.successNotification('Registro removido com sucesso');
        this.modalInstance.hide();
        this.callBack.next();
    }

}
