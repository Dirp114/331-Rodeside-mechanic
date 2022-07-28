import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gmech7PageRoutingModule } from './gmech7-routing.module';

import { Gmech7Page } from './gmech7.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gmech7PageRoutingModule
  ],
  declarations: [Gmech7Page]
})
export class Gmech7PageModule {}
