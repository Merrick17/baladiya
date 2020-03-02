import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DriverlistPageRoutingModule } from './driverlist-routing.module';

import { DriverlistPage } from './driverlist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DriverlistPageRoutingModule
  ],
  declarations: [DriverlistPage]
})
export class DriverlistPageModule {}
