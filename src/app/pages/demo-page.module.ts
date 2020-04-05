import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoPageRoutingModule } from './demo-page-routing.module';
import { DemoPageComponent } from './demo-page.component';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [DemoPageComponent],
  imports: [
    CommonModule,
    DemoPageRoutingModule,
    HttpClientModule
  ]
})
export class DemoPageModule { }
