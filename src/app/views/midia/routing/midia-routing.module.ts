import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MidiaComponent } from '../midia.component';

const routes: Routes = [{ path: '', component: MidiaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MidiaRoutingModule { }
