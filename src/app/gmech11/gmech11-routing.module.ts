import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gmech11Page } from './gmech11.page';

const routes: Routes = [
  {
    path: '',
    component: Gmech11Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gmech11PageRoutingModule {}
