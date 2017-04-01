import { Campanha } from './campanha';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CampanhaService {

    url = '';

    constructor(
        private http: Http
    ) { }

    successResult(res: Response) {
        console.log('success');
        return res.json().DataList;
    }

    errorResult(error: Response) {
        console.log('error');
        return Observable.throw(error);
    }

    getCampanhas(): Observable<Campanha[]> {
        return this.http.get(this.url)
            .map(this.successResult)
            .catch(this.errorResult);
    }
}
