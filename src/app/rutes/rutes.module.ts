import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RutesRoutingModule} from "./rutes-routing.module";
import {GestioModule} from "./gestio/gestio.module";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RutesRoutingModule,
    GestioModule
  ],
  exports: [
    RouterModule
  ]
})
export class RutesModule { }
