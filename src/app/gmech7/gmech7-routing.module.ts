import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gmech7Page } from './gmech7.page';

const routes: Routes = [
  {
    path: '',
    component: Gmech7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gmech7PageRoutingModule {}
