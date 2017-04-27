import { BancoSaveGeneratedComponent } from './generated/banco-save.generated.component';
import { Component } from '@angular/core';

import { SaveService } from '../../../common/crud/save.service';
import { BancoFilter } from '../models/banco.filter';
import { Banco } from '../models/banco';

@Component({
    selector: 'banco-save',
    templateUrl: './generated/banco-save.generated.component.html',
    providers: [SaveService],
})

export class BancoSaveComponent extends BancoSaveGeneratedComponent {

    constructor(public save: SaveService<Banco, BancoFilter>) {
        super(save);
    }

}
