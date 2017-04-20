import { HttpResult } from '../models/http-result';
import { Filter } from '../models/filter';
import { Http, RequestOptions, Response, Headers, URLSearchParams } from '@angular/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class ApiService<T> {

    public Get = this._get;
    public GetDetails = this._getDetails;
    public GetDataItem = this._getDataitem;
    public GetDataListCustom = this._getDataListCustom;
    public GetDataCustom = this._getDataCustom;
    public GetMethodCustom = this._getMethodCustom;
    public Post = this._post;
    public Put = this._put;
    public Delete = this._delete;

    private apiDefault = 'http://177.153.18.87:8077/FranqueadorApi/api';
    protected resource: string;

    constructor(private http: Http) { }

    public setResource(resource: string) {
        this.resource = resource;
    }

    public getResource(): string {

        if (this.resource == null) {
            throw new Error('resource não definido');
        }

        return this.resource;
    }

    private requestOptions(): RequestOptions {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'token': 'a3d6c7bd-77de-439b-8175-88fe3de87fec-32-276-1-True-False'
        });

        return new RequestOptions({ headers: headers });
    }

    private _delete(data: any): Observable<HttpResult<T>> {
        return this.http.delete(this.makeBaseUrl(),
            this.requestOptions().merge(new RequestOptions({
                search: this.makeSearchParams(data)
            })))
            .map(this.successResult)
            .catch(this.errorResult);
    }

    private _post(data: any): Observable<HttpResult<T>> {
        return this.http.post(this.makeBaseUrl(),
            JSON.stringify(data),
            this.requestOptions())
            .map(this.successResult)
            .catch(this.errorResult);
    }

    private _put(data: any): Observable<HttpResult<T>> {
        return this.http.put(this.makeBaseUrl(),
            JSON.stringify(data),
            this.requestOptions())
            .map(this.successResult)
            .catch(this.errorResult);
    }

    private _getDataListCustom(filters?: Filter): Observable<HttpResult<T>> {
        return this._getMethodCustom('GetDataListCustom');
    }

    private _getDetails(filters?: Filter): Observable<HttpResult<T>> {
        return this._getMethodCustom('GetDetails');
    }

    private _getDataCustom(filters?: Filter): Observable<HttpResult<T>> {
        return this._getMethodCustom('GetDataCustom');
    }

    private _getDataitem(filters?: Filter): Observable<HttpResult<T>> {
        return this._getMethodCustom('GetDataItem');
    }

    private _get(filters?: Filter): Observable<HttpResult<T>> {
        return this.getBase(this.makeBaseUrl(), filters);
    }

    private _getMethodCustom(method: string, filters?: Filter): Observable<HttpResult<T>> {
        return this.getBase(this.makeGetCustomMethodBaseUrl(method), filters);
    }

    private makeGetCustomMethodBaseUrl(method: string): string {
        return this.makeBaseUrl() + `/${method}`;
    }

    private makeBaseUrl(): string {
        return `${this.apiDefault}/${this.getResource()}`;
    }

    private makeSearchParams(filters?: Filter): URLSearchParams {
        const params = new URLSearchParams();
        if (filters != null) {
            for (const key in filters) {
                if (filters.hasOwnProperty(key)) {
                    params.set(key, filters[key]);
                }
            }
        }

        return params;
    }

    private getBase(url: string, filters?: Filter): Observable<HttpResult<T>> {

        if (filters != null && filters.Id != null) {
            url += '/' + filters.Id;
        }

        return this.http.get(url,
            this.requestOptions().merge(new RequestOptions({
                search: this.makeSearchParams(filters)
            })))
            .map(this.successResult)
            .catch(this.errorResult);
    }

    private successResult(res: Response): Observable<HttpResult<T>> {
        return res.json();
    }

    private errorResult(error: Response): Observable<HttpResult<T>> {
        return Observable.throw(error);
    }

}
