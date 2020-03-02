import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgentloginPage } from './agentlogin.page';

const routes: Routes = [
  {
    path: '',
    component: AgentloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgentloginPageRoutingModule {}
