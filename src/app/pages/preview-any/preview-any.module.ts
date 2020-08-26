import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewAnyPageRoutingModule } from './preview-any-routing.module';

import { PreviewAnyPage } from './preview-any.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewAnyPageRoutingModule
  ],
  declarations: [PreviewAnyPage]
})
export class PreviewAnyPageModule {}
