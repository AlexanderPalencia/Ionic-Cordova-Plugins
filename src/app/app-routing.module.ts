import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'scanner',
    loadChildren: () => import('./pages/scanner/scanner.module').then( m => m.ScannerPageModule)
  },
  {
    path: 'document-viewer',
    loadChildren: () => import('./pages/document-viewer/document-viewer.module').then( m => m.DocumentViewerPageModule)
  },
  {
    path: 'preview-any',
    loadChildren: () => import('./pages/preview-any/preview-any.module').then( m => m.PreviewAnyPageModule)
  },
  {
    path: 'sqllite-key-value',
    loadChildren: () => import('./pages/sqllite-key-value/sqllite-key-value.module').then( m => m.SqlliteKeyValuePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
