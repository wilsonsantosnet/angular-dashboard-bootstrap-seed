import { Campanha } from '../campanha/campanha';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Inject, Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class ApiService<T> {

    public Get = this._get;
    public GetDetails = this._getDetails;
    public DataItem = this._dataitem;
    public GetDataListCustom = this._getDataListCustom;
    public GetDataCustom = this._getDataCustom;
    public GetMethodCustom = this._getMethodCustom;

    public Post = this._post;
    // public Put = _put;
    // public Delete = _delete;

    private apiDefault = '';

    constructor(
        private http: Http
    ) { }

    private _post(resource: string, data: any) {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'token': '6f7b88a2-1b0a-4be4-b297-fb9ce5a8940f'
        });

        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.makeBaseUrl(resource), JSON.stringify(data), options);
    }

    private successResult(res: Response) {
        console.log('success');
        return res.json().DataList;
    }

    private errorResult(error: Response) {
        console.log('error');
        return Observable.throw(error);
    }

    private _getDataListCustom(resource: string) {
        return this._getMethodCustom(resource, 'GetDataListCustom');
    }

    private _getDetails(resource: string) {
        return this._getMethodCustom(resource, 'GetDetails');
    }

    private _getDataCustom(resource: string) {
        return this._getMethodCustom(resource, 'GetDataCustom');
    }

    private _dataitem(resource: string) {
        return this._getMethodCustom(resource, 'GetDataItem');
    }

    private _get(resource: string): Observable<T[]> {
        return this.http.get(this.makeBaseUrl(resource))
            .map(this.successResult)
            .catch(this.errorResult);
    }

    private _getMethodCustom(resource: string, method: string) {
        return this.http.get(this.makeGetCustomMethodBaseUrl(resource, method))
            .map(this.successResult)
            .catch(this.errorResult);
    }

    private makeBaseUrl(resource: string): string {
        return `${this.apiDefault}/${resource}`;
    }

    private makeGetCustomMethodBaseUrl(resource: string, method: string): string {
        return this.makeBaseUrl(resource) + `/${method}`;
    }
}
