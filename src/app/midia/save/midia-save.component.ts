import { MidiaSaveGeneratedComponent } from './generated/midia-save.generated.component';
import { Component, ChangeDetectionStrategy } from '@angular/core';

import { SaveService } from '../../common/crud/save.service';
import { MidiaFilter } from '../models/midia.filter';
import { Midia } from '../models/midia';

@Component({
    selector: 'midia-save',
    templateUrl: './generated/midia-save.generated.component.html',
    providers: [SaveService],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class MidiaSaveComponent extends MidiaSaveGeneratedComponent {

    constructor(public save: SaveService<Midia, MidiaFilter>) {
        super(save);
    }

}
