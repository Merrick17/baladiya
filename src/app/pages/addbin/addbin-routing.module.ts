import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddbinPage } from './addbin.page';

const routes: Routes = [
  {
    path: '',
    component: AddbinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddbinPageRoutingModule {}
