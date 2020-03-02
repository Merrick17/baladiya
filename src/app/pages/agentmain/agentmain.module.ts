import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgentmainPageRoutingModule } from './agentmain-routing.module';

import { AgentmainPage } from './agentmain.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgentmainPageRoutingModule
  ],
  declarations: [AgentmainPage]
})
export class AgentmainPageModule {}
