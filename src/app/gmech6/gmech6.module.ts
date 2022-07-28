import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gmech6PageRoutingModule } from './gmech6-routing.module';

import { Gmech6Page } from './gmech6.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gmech6PageRoutingModule
  ],
  declarations: [Gmech6Page]
})
export class Gmech6PageModule {}
