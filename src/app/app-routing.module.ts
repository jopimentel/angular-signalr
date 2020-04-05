import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'demo', loadChildren: () => import('./pages/demo-page.module').then(m => m.DemoPageModule) },
  { path: '**', redirectTo: 'demo', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


