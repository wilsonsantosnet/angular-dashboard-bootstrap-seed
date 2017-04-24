import { AuthService } from './common/auth/auth.service';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './common/auth/auth.guard';

import { LayoutComponent } from './layout/layout.component';

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', component: LayoutComponent, canActivate: [AuthGuard], children: [
                    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
                    { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
                    { path: 'midia', loadChildren: './midia/midia.module#MidiaModule' }
                ]
            },
            { path: 'login', loadChildren: './login/login.module#LoginModule' }

        ]),
    ],
    exports: [RouterModule],
    providers: [AuthGuard, AuthService]
})
export class AppRoutingModule {
}
