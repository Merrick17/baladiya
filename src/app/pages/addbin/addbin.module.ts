import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddbinPageRoutingModule } from './addbin-routing.module';

import { AddbinPage } from './addbin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddbinPageRoutingModule
  ],
  declarations: [AddbinPage]
})
export class AddbinPageModule {}
