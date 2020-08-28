import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SqlliteKeyValuePageRoutingModule } from './sqllite-key-value-routing.module';

import { SqlliteKeyValuePage } from './sqllite-key-value.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SqlliteKeyValuePageRoutingModule
  ],
  declarations: [SqlliteKeyValuePage]
})
export class SqlliteKeyValuePageModule {}
