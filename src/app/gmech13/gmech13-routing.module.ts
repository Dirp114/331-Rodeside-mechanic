import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gmech13Page } from './gmech13.page';

const routes: Routes = [
  {
    path: '',
    component: Gmech13Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gmech13PageRoutingModule {}
