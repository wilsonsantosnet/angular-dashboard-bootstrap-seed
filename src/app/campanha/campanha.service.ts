import { CrudService } from './../common/crud.service';
import { Campanha } from './campanha';
import { Injectable } from '@angular/core';

@Injectable()
export class CampanhaService extends CrudService<Campanha> {

    public setResource() {
        this.resource = 'Campanha';
    }

}
