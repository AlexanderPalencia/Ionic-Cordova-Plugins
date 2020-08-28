import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SqlliteKeyValuePage } from './sqllite-key-value.page';

const routes: Routes = [
  {
    path: '',
    component: SqlliteKeyValuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SqlliteKeyValuePageRoutingModule {}
