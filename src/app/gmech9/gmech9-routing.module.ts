import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gmech9Page } from './gmech9.page';

const routes: Routes = [
  {
    path: '',
    component: Gmech9Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gmech9PageRoutingModule {}
