import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gmech4PageRoutingModule } from './gmech4-routing.module';

import { Gmech4Page } from './gmech4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gmech4PageRoutingModule
  ],
  declarations: [Gmech4Page]
})
export class Gmech4PageModule {}
