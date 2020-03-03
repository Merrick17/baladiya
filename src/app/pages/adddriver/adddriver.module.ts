import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdddriverPageRoutingModule } from './adddriver-routing.module';

import { AdddriverPage } from './adddriver.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdddriverPageRoutingModule
  ],
  declarations: [AdddriverPage]
})
export class AdddriverPageModule {}
