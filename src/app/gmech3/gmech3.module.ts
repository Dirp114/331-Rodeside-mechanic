import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gmech3PageRoutingModule } from './gmech3-routing.module';

import { Gmech3Page } from './gmech3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gmech3PageRoutingModule
  ],
  declarations: [Gmech3Page]
})
export class Gmech3PageModule {}
