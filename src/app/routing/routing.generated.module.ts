import { Routes } from '@angular/router';

export const routesGenerated: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', loadChildren: './views/dashboard/dashboard.module#DashboardModule' },
    { path: 'banco', loadChildren: './views/banco/banco.module#BancoModule' },
    { path: 'campanha', loadChildren: './views/campanha/campanha.module#CampanhaModule' },
    { path: 'midia', loadChildren: './views/midia/midia.module#MidiaModule' },
    { path: 'dadosbancarios', loadChildren: './views/dadosbancarios/dadosbancarios.module#DadosBancariosModule' },

];
