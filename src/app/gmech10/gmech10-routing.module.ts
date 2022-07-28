import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Gmech10Page } from './gmech10.page';

const routes: Routes = [
  {
    path: '',
    component: Gmech10Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Gmech10PageRoutingModule {}
