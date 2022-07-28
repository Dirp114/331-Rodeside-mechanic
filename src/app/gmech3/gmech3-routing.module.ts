import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gmech3Page } from './gmech3.page';

const routes: Routes = [
  {
    path: '',
    component: Gmech3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gmech3PageRoutingModule {}
