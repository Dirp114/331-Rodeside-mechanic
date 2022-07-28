import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gmech2Page } from './gmech2.page';

const routes: Routes = [
  {
    path: '',
    component: Gmech2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gmech2PageRoutingModule {}
