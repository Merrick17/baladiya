import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdddriverPage } from './adddriver.page';

const routes: Routes = [
  {
    path: '',
    component: AdddriverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdddriverPageRoutingModule {}
