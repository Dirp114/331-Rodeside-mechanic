import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gmech8PageRoutingModule } from './gmech8-routing.module';

import { Gmech8Page } from './gmech8.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gmech8PageRoutingModule
  ],
  declarations: [Gmech8Page]
})
export class Gmech8PageModule {}
