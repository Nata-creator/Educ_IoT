import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'que-es',
    loadChildren: () => import('./pages/que-es/que-es.module').then( m => m.QueEsPageModule)
  },
  {
    path: 'aplicaciones',
    loadChildren: () => import('./pages/aplicaciones/aplicaciones.module').then( m => m.AplicacionesPageModule)
  },
  {
    path: 'componentes',
    loadChildren: () => import('./pages/componentes/componentes.module').then( m => m.ComponentesPageModule)
  },
  {
    path: 'beneficios',
    loadChildren: () => import('./pages/beneficios/beneficios.module').then( m => m.BeneficiosPageModule)
  },
  {
    path: 'evaluate',
    loadChildren: () => import('./pages/evaluate/evaluate.module').then( m => m.EvaluatePageModule)
  },
  {
    path: 'fuente',
    loadChildren: () => import('./pages/fuente/fuente.module').then( m => m.FuentePageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
