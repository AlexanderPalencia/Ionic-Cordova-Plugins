import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DocumentViewerPageRoutingModule } from './document-viewer-routing.module';

import { DocumentViewerPage } from './document-viewer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DocumentViewerPageRoutingModule
  ],
  declarations: [DocumentViewerPage]
})
export class DocumentViewerPageModule {}
