import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from 'app/layout/layout-routing.module';
import { LayoutTopModule } from 'app/layout/top/layout-top.module';
import { LayoutMenuModule } from 'app/layout/menu/layout-menu.module';

import { LayoutComponent } from 'app/layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    LayoutTopModule,
    LayoutMenuModule
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
