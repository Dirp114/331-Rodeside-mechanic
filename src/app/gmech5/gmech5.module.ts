import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gmech5PageRoutingModule } from './gmech5-routing.module';

import { Gmech5Page } from './gmech5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gmech5PageRoutingModule
  ],
  declarations: [Gmech5Page]
})
export class Gmech5PageModule {}
