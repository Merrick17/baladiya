import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentloginPageRoutingModule } from './agentlogin-routing.module';

import { AgentloginPage } from './agentlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentloginPageRoutingModule
  ],
  declarations: [AgentloginPage]
})
export class AgentloginPageModule {}
