import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from 'app/shared/navbar/navbar.component';

const routes: Routes = [ { path: '', component: NavbarComponent } ];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: []
})
export class NavbarRoutingModule {
}
