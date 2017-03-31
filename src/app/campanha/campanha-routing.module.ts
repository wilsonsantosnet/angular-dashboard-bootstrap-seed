import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CampanhaComponent } from 'app/campanha/campanha.component';

const routes: Routes = [{ path: '', component: CampanhaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampanhaRoutingModule { }
