import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gmech12PageRoutingModule } from './gmech12-routing.module';

import { Gmech12Page } from './gmech12.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gmech12PageRoutingModule
  ],
  declarations: [Gmech12Page]
})
export class Gmech12PageModule {}
