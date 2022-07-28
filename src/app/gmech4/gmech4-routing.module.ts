import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gmech4Page } from './gmech4.page';

const routes: Routes = [
  {
    path: '',
    component: Gmech4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gmech4PageRoutingModule {}
