import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '', component: LayoutComponent, children: [
          { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
          { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
          { path: 'campanha', loadChildren: './campanha/campanha.module#CampanhaModule' }
        ]
      }
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
