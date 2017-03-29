import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
  ],
  declarations: [ NavbarComponent ],
  exports: [ NavbarComponent ],
})
export class NavbarModule { }
