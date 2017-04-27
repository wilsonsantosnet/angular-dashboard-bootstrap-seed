import { BancoGridGeneratedComponent } from './generated/banco-grid.generated.component';
import { Component } from '@angular/core';

@Component({
    selector: 'banco-grid',
    templateUrl: './generated/banco-grid.generated.component.html',
})

export class BancoGridComponent extends BancoGridGeneratedComponent {

    constructor() {
        super();
    }

}
