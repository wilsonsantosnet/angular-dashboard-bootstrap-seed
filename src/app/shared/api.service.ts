import { Filter } from './filter';
import { IApi } from './api.interface';
import { Campanha } from '../campanha/campanha';
import { Http, RequestOptions, Response, Headers, URLSearchParams } from '@angular/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export abstract class ApiService<T> {

    public Get = this._get;
    public GetDetails = this._getDetails;
    public DataItem = this._dataitem;
    public GetDataListCustom = this._getDataListCustom;
    public GetDataCustom = this._getDataCustom;
    public GetMethodCustom = this._getMethodCustom;
    public Post = this._post;
    public Put = this._put;
    public Delete = this._delete;

    private apiDefault = '';
    protected resource: string;

    constructor(private http: Http) {
        this.setResource();
    }

    public abstract setResource()

    public getResource(): string {
        return this.resource;
    }

    private requestOptions(): RequestOptions {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'token': '6f7b88a2-1b0a-4be4-b297-fb9ce5a8940f'
        });

        return new RequestOptions({ headers: headers });
    }

    private _delete(data: any) {
        return this.http.delete(this.makeBaseUrl(), this.requestOptions().merge(new RequestOptions({ search: this.makeSearchParams(data) })))
            .map(this.successResult)
            .catch(this.errorResult);
    }

    private _post(data: any) {
        return this.http.post(this.makeBaseUrl(), JSON.stringify(data), this.requestOptions())
            .map(this.successResult)
            .catch(this.errorResult);
    }

    private _put(data: any) {
        return this.http.put(this.makeBaseUrl(), JSON.stringify(data), this.requestOptions());
    }

    private successResult(res: Response): Observable<any> {
        console.log("success");
        return res.json();
    }

    private completeResult() {
        console.log("finaly");
    }

    private errorResult(error: Response) {
        return Observable.throw(error);
    }

    private _getDataListCustom(): Observable<T[]> {
        return this._getMethodCustom('GetDataListCustom');
    }

    private _getDetails(): Observable<T[]> {
        return this._getMethodCustom('GetDetails');
    }

    private _getDataCustom(): Observable<T[]> {
        return this._getMethodCustom('GetDataCustom');
    }

    private _dataitem(): Observable<T[]> {
        return this._getMethodCustom('GetDataItem');
    }

    private _getMethodCustom(method: string) {
        return this.getBase(this.makeGetCustomMethodBaseUrl(method));
    }

    private _get(filters?): Observable<any> {
        return this.getBase(this.makeBaseUrl(), filters);
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

    private getBase(url: string, filters?: Filter) {

        if (filters != null && filters.Id != null) {
            url += "/" + filters.Id;
        }

        return this.http.get(url, this.requestOptions().merge(new RequestOptions({ search: this.makeSearchParams(filters) })))
            .map(this.successResult)
            .catch(this.errorResult);
    }
}
