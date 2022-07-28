import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gmech13PageRoutingModule } from './gmech13-routing.module';

import { Gmech13Page } from './gmech13.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gmech13PageRoutingModule
  ],
  declarations: [Gmech13Page]
})
export class Gmech13PageModule {}
