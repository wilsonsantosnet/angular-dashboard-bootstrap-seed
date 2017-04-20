import { MidiaDeleteGeneratedComponent } from './generated/midia-delete.generated.component';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { RemoveService } from '../../common/crud/remove.service';
import { Midia } from '../models/midia';

@Component({
    selector: 'midia-delete',
    templateUrl: './generated/midia-delete.generated.component.html',
    providers: [RemoveService],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MidiaDeleteComponent extends MidiaDeleteGeneratedComponent {

    constructor(public remove: RemoveService<Midia>) {
        super(remove);
    }

}
