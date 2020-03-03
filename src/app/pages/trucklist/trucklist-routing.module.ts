import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrucklistPage } from './trucklist.page';

const routes: Routes = [
  {
    path: '',
    component: TrucklistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TrucklistPageRoutingModule {}
