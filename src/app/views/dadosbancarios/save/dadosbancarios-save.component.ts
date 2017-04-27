import { DadosBancariosSaveGeneratedComponent } from './generated/dadosbancarios-save.generated.component';
import { Component } from '@angular/core';

import { SaveService } from '../../../common/crud/save.service';
import { DadosBancariosFilter } from '../models/dadosbancarios.filter';
import { DadosBancarios } from '../models/dadosbancarios';

@Component({
    selector: 'dadosbancarios-save',
    templateUrl: './generated/dadosbancarios-save.generated.component.html',
    providers: [SaveService],
})

export class DadosBancariosSaveComponent extends DadosBancariosSaveGeneratedComponent {

    constructor(public save: SaveService<DadosBancarios, DadosBancariosFilter>) {
        super(save);
    }

}
