import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BinlistPage } from './binlist.page';

const routes: Routes = [
  {
    path: '',
    component: BinlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BinlistPageRoutingModule {}
