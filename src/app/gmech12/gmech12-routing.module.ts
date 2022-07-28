import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gmech12Page } from './gmech12.page';

const routes: Routes = [
  {
    path: '',
    component: Gmech12Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gmech12PageRoutingModule {}
