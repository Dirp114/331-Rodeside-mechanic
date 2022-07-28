import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gmech1PageRoutingModule } from './gmech1-routing.module';

import { Gmech1Page } from './gmech1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gmech1PageRoutingModule
  ],
  declarations: [Gmech1Page]
})
export class Gmech1PageModule {}
