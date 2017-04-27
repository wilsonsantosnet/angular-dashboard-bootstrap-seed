import { CampanhaDeleteGeneratedComponent } from './generated/campanha-delete.generated.component';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RemoveService } from '../../../common/crud/remove.service';
import { Campanha } from '../models/campanha';

@Component({
    selector: 'campanha-delete',
    templateUrl: './generated/campanha-delete.generated.component.html',
    providers: [RemoveService],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class CampanhaDeleteComponent extends CampanhaDeleteGeneratedComponent {

    constructor(public remove: RemoveService<Campanha>) {
        super(remove);
    }

}
