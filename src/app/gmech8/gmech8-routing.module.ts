import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gmech8Page } from './gmech8.page';

const routes: Routes = [
  {
    path: '',
    component: Gmech8Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gmech8PageRoutingModule {}
