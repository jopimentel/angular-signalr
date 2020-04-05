import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DemoPageComponent } from './demo-page.component';

const routes: Routes = [
  { path: '', component: DemoPageComponent },
  { path: '**', redirectTo: 'demo', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoPageRoutingModule { }
