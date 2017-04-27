import { CampanhaSaveGeneratedComponent } from './generated/campanha-save.generated.component';
import { Component } from '@angular/core';

import { SaveService } from '../../../common/crud/save.service';
import { CampanhaFilter } from '../models/campanha.filter';
import { Campanha } from '../models/campanha';

@Component({
    selector: 'campanha-save',
    templateUrl: './generated/campanha-save.generated.component.html',
    providers: [SaveService],
})

export class CampanhaSaveComponent extends CampanhaSaveGeneratedComponent {

    constructor(public save: SaveService<Campanha, CampanhaFilter>) {
        super(save);
    }

}
