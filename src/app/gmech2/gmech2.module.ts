import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gmech2PageRoutingModule } from './gmech2-routing.module';

import { Gmech2Page } from './gmech2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gmech2PageRoutingModule
  ],
  declarations: [Gmech2Page]
})
export class Gmech2PageModule {}
