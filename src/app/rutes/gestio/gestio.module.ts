import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { VideosComponent } from './components/videos/videos.component';
import { PrincipalGestioComponent } from './containers/principal-gestio/principal-gestio.component';
import {GestioRoutingModule} from "./gestio-routing.module";
import {GestioPrincipalResolver} from "./service/gestio-principal.resolver";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    GestioRoutingModule
  ],
  providers: [
    GestioPrincipalResolver
  ]
})
export class GestioModule { }
