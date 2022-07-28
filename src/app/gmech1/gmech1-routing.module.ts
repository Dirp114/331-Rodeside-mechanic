import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gmech1Page } from './gmech1.page';

const routes: Routes = [
  {
    path: '',
    component: Gmech1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gmech1PageRoutingModule {}
