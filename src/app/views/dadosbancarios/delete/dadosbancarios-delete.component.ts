import { DadosBancariosDeleteGeneratedComponent } from './generated/dadosbancarios-delete.generated.component';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RemoveService } from '../../../common/crud/remove.service';
import { DadosBancarios } from '../models/dadosbancarios';

@Component({
    selector: 'dadosbancarios-delete',
    templateUrl: './generated/dadosbancarios-delete.generated.component.html',
    providers: [RemoveService],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class DadosBancariosDeleteComponent extends DadosBancariosDeleteGeneratedComponent {

    constructor(public remove: RemoveService<DadosBancarios>) {
        super(remove);
    }

}
