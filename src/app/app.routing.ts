import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { ModuleWithProviders, NgModule } from '@angular/core';

export const routes: Routes = [
  { path: '', loadChildren: './content/pages/pages.module#PagesModule'},
  { path: 'auth', loadChildren: './content/auth/auth.module#AuthModule' },
  { path: '**', loadChildren: './content/pages/errors/not-found/not-found.module#NotFoundModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
