import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { HttpResult } from './../models/http-result';
import { Dto } from '../models/dto';
import { Filter } from '../models/filter';
import { ApiService } from '../rest/api.service';

@Injectable()
export class FilterService<T extends Dto, TFilter extends Filter> extends ApiService<T> {

    public dataList: T[];
    public model: TFilter;
    public callBack = new Subject<string>();

    public totalItens = 0;
    public onFilter$ = this.callBack.asObservable();

    public Start(resource: string, startFilter: TFilter) {
        this.resource = resource;
        this.model = startFilter;
        this.Load(this.model);
    }

    public ExecuteFilter() {
        this.Load(this.model);
    }

    public Load(filters?: TFilter) {
        this.Get(filters).subscribe(data => {
            this.dataList = data.DataList;
            this.totalItens = data.Summary.Total;
            this.callBack.next();
        });
    }

    public OrderBy(field: string, type?: number) {
        this.model.OrderFields = [field];

        if (type === undefined) {
            if (this.model.OrderByType === 0) {
                type = 1;
            } else {
                type = 0;
            }
        }

        this.model.OrderByType = type;
        this.model.IsOrderByDynamic = true;

        this.Load(this.model);
    }


    public pageChanged(clicked) {
        this.model.PageIndex = clicked.page;
        this.Load(this.model);
    }
}
