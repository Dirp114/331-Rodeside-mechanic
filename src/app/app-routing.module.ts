import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dash',
    loadChildren: () => import('./dash/dash.module').then( m => m.DashPageModule)
  },
  {
    path: 'dash1',
    loadChildren: () => import('./dash1/dash1.module').then( m => m.Dash1PageModule)
  },
  {
    path: 'gmech1',
    loadChildren: () => import('./gmech1/gmech1.module').then( m => m.Gmech1PageModule)
  },
  {
    path: 'gmech2',
    loadChildren: () => import('./gmech2/gmech2.module').then( m => m.Gmech2PageModule)
  },
  {
    path: 'gmech3',
    loadChildren: () => import('./gmech3/gmech3.module').then( m => m.Gmech3PageModule)
  },
  {
    path: 'gmech4',
    loadChildren: () => import('./gmech4/gmech4.module').then( m => m.Gmech4PageModule)
  },
  {
    path: 'gmech5',
    loadChildren: () => import('./gmech5/gmech5.module').then( m => m.Gmech5PageModule)
  },
  {
    path: 'gmech6',
    loadChildren: () => import('./gmech6/gmech6.module').then( m => m.Gmech6PageModule)
  },
  {
    path: 'gmech7',
    loadChildren: () => import('./gmech7/gmech7.module').then( m => m.Gmech7PageModule)
  },
  {
    path: 'gmech8',
    loadChildren: () => import('./gmech8/gmech8.module').then( m => m.Gmech8PageModule)
  },
  {
    path: 'gmech9',
    loadChildren: () => import('./gmech9/gmech9.module').then( m => m.Gmech9PageModule)
  },
  {
    path: 'gmech10',
    loadChildren: () => import('./gmech10/gmech10.module').then( m => m.Gmech10PageModule)
  },
  {
    path: 'gmech11',
    loadChildren: () => import('./gmech11/gmech11.module').then( m => m.Gmech11PageModule)
  },
  {
    path: 'gmech12',
    loadChildren: () => import('./gmech12/gmech12.module').then( m => m.Gmech12PageModule)
  },
  {
    path: 'gmech13',
    loadChildren: () => import('./gmech13/gmech13.module').then( m => m.Gmech13PageModule)
  },
  {
    path: 'reg',
    loadChildren: () => import('./reg/reg.module').then( m => m.RegPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
