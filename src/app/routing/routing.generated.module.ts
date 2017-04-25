import { Routes } from '@angular/router';

export const routesGenerated: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: './views/dashboard/dashboard.module#DashboardModule' },
    { path: 'midia', loadChildren: './views/midia/midia.module#MidiaModule' }
];
