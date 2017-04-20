import { Injectable } from '@angular/core';

import { Dto } from '../models/dto';
import { Filter } from '../models/filter';
import { ApiService } from '../rest/api.service';

@Injectable()
export class FilterService<T extends Dto, TFilter extends Filter> extends ApiService<T> {

    public itens: T[];
    public model: TFilter;

    public Start(resource: string, startFilter: TFilter) {
        this.resource = resource;
        this.model = startFilter;
        this.Load();
    }

    public ExecuteFilter() {
        this.Load(this.model);
    }

    public Load(filters?: TFilter) {
        this.Get(filters).subscribe(data => this.itens = data.DataList);
    }
}
