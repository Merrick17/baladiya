import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BinlistPageRoutingModule } from './binlist-routing.module';

import { BinlistPage } from './binlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BinlistPageRoutingModule
  ],
  declarations: [BinlistPage]
})
export class BinlistPageModule {}
