import { DeleteCampanhaComponent } from './delete.component';
import { MakeSelectComponent } from './../common/select.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { ModalModule } from 'ngx-bootstrap/modal';

import { CampanhaRoutingModule } from './campanha-routing.module';

import { CampanhaComponent } from 'app/campanha/campanha.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CampanhaRoutingModule,
        ModalModule.forRoot(),
    ],
    declarations: [CampanhaComponent, MakeSelectComponent, DeleteCampanhaComponent]
})
export class CampanhaModule { }
