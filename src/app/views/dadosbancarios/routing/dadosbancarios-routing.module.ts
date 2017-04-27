import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosBancariosComponent } from '../dadosbancarios.component';

const routes: Routes = [{ path: '', component: DadosBancariosComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DadosBancariosRoutingModule { }
