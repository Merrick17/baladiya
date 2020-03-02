import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentmainPage } from './agentmain.page';

const routes: Routes = [
  {
    path: '',
    component: AgentmainPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentmainPageRoutingModule {}
