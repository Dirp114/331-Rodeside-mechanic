import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gmech11PageRoutingModule } from './gmech11-routing.module';

import { Gmech11Page } from './gmech11.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gmech11PageRoutingModule
  ],
  declarations: [Gmech11Page]
})
export class Gmech11PageModule {}
