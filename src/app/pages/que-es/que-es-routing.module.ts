import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueEsPage } from './que-es.page';

const routes: Routes = [
  {
    path: '',
    component: QueEsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueEsPageRoutingModule {}
