import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gmech5Page } from './gmech5.page';

const routes: Routes = [
  {
    path: '',
    component: Gmech5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gmech5PageRoutingModule {}
