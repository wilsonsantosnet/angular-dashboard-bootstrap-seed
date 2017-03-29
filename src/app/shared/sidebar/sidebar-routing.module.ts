import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarComponent } from 'app/shared/sidebar/sidebar.component';

const routes: Routes = [ { path: '', component: SidebarComponent } ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class SidebarRoutingModule {
}
