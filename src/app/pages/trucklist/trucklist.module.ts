import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TrucklistPageRoutingModule } from './trucklist-routing.module';

import { TrucklistPage } from './trucklist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TrucklistPageRoutingModule
  ],
  declarations: [TrucklistPage]
})
export class TrucklistPageModule {}
