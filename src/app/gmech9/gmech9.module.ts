import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gmech9PageRoutingModule } from './gmech9-routing.module';

import { Gmech9Page } from './gmech9.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gmech9PageRoutingModule
  ],
  declarations: [Gmech9Page]
})
export class Gmech9PageModule {}
