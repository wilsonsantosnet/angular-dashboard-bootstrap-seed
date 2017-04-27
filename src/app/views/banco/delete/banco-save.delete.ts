import { BancoDeleteGeneratedComponent } from './generated/banco-delete.generated.component';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RemoveService } from '../../../common/crud/remove.service';
import { Banco } from '../models/banco';

@Component({
    selector: 'banco-delete',
    templateUrl: './generated/banco-delete.generated.component.html',
    providers: [RemoveService],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class BancoDeleteComponent extends BancoDeleteGeneratedComponent {

    constructor(public remove: RemoveService<Banco>) {
        super(remove);
    }

}
