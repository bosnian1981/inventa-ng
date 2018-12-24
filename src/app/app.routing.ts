import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadChildren: './content/pages/pages.module#PagesModule'},
  { path: 'auth', loadChildren: './content/auth/auth.module#AuthModule' },
  { path: '**', loadChildren: './content/pages/errors/not-found/not-found.module#NotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
     preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
