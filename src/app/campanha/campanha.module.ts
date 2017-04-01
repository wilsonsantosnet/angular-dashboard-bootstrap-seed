import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/primeng';
import { ModalModule } from 'ng2-bootstrap/modal';
import { FormsModule } from '@angular/forms';

import { CampanhaRoutingModule } from './campanha-routing.module';

import { CampanhaComponent } from 'app/campanha/campanha.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CampanhaRoutingModule,
        FieldsetModule,
        ModalModule.forRoot()
    ],
    declarations: [CampanhaComponent]
})
export class CampanhaModule { }
