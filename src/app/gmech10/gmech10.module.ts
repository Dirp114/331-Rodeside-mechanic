import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Gmech10PageRoutingModule } from './gmech10-routing.module';

import { Gmech10Page } from './gmech10.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Gmech10PageRoutingModule
  ],
  declarations: [Gmech10Page]
})
export class Gmech10PageModule {}
