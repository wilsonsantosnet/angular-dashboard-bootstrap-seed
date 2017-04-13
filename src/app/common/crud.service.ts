import { ApiService } from '../common/api.service';
import { Campanha } from '../campanha/campanha';
import { Http, RequestOptions, Response, Headers } from '@angular/http';
import { Inject, Injectable, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs/Rx';

@Injectable()
export class CrudService<T> extends ApiService<T> {



}