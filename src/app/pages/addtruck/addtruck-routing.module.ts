import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddtruckPage } from './addtruck.page';

const routes: Routes = [
  {
    path: '',
    component: AddtruckPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddtruckPageRoutingModule {}
