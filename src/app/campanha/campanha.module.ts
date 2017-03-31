import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FieldsetModule } from 'primeng/primeng';

import { CampanhaRoutingModule } from './campanha-routing.module';

import { CampanhaComponent } from 'app/campanha/campanha.component';

@NgModule({
    imports: [
        CommonModule,
        CampanhaRoutingModule,
        FieldsetModule
    ],
    declarations: [CampanhaComponent]
})
export class CampanhaModule { }
