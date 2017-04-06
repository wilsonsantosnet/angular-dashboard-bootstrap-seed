import { IApi } from './api.interface';
import { Campanha } from '../campanha/campanha';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class ApiService<T extends IApi> {

    public Get = this._get;
    public GetDetails = this._getDetails;
    public DataItem = this._dataitem;
    public GetDataListCustom = this._getDataListCustom;
    public GetDataCustom = this._getDataCustom;
    public GetMethodCustom = this._getMethodCustom;
    public Post = this._post;
    public Put = this._put;
    // public Delete = _delete;

    private apiDefault = 'http://cnabox.com.br:8075/FranqueadorApi/api';
    private _apiClass: T;

    constructor(private http: Http) { }

    public setResource(instance: T) {
        this._apiClass = instance;
    }

    private getResource(): string {
        return this._apiClass.Resource;
    }

    private _post(data: any) {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'token': '6f7b88a2-1b0a-4be4-b297-fb9ce5a8940f'
        });

        const options = new RequestOptions({ headers: headers });
        return this.http.post(this.makeBaseUrl(), JSON.stringify(data), options);
    }

    private _put(data: any) {
        const headers = new Headers({
            'Content-Type': 'application/json',
            'token': '6f7b88a2-1b0a-4be4-b297-fb9ce5a8940f'
        });

        const options = new RequestOptions({ headers: headers });
        return this.http.put(this.makeBaseUrl(), JSON.stringify(data), options);
    }

    private successResult(res: Response) {
        console.log('success');
        return res.json().DataList;
    }

    private errorResult(error: Response) {
        console.log('error');
        return Observable.throw(error);
    }

    private _getDataListCustom() {
        return this._getMethodCustom('GetDataListCustom');
    }

    private _getDetails() {
        return this._getMethodCustom('GetDetails');
    }

    private _getDataCustom() {
        return this._getMethodCustom('GetDataCustom');
    }

    private _dataitem() {
        return this._getMethodCustom('GetDataItem');
    }

    private _get(): Observable<T[]> {
        return this.getBase(this.makeBaseUrl());
    }

    private _getMethodCustom(method: string) {
        return this.getBase(this.makeGetCustomMethodBaseUrl(method));
    }

    private getBase(url: string) {
        return this.http.get(url)
            .map(this.successResult)
            .catch(this.errorResult);
    }

    private makeBaseUrl(): string {
        return `${this.apiDefault}/${this.getResource()}`;
    }

    private makeGetCustomMethodBaseUrl(method: string): string {
        return this.makeBaseUrl() + `/${method}`;
    }
}
