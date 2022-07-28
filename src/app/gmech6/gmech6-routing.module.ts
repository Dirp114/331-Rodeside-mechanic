import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gmech6Page } from './gmech6.page';

const routes: Routes = [
  {
    path: '',
    component: Gmech6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gmech6PageRoutingModule {}
