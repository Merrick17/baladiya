import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddtruckPageRoutingModule } from './addtruck-routing.module';

import { AddtruckPage } from './addtruck.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddtruckPageRoutingModule
  ],
  declarations: [AddtruckPage]
})
export class AddtruckPageModule {}
