import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './components/principal/principal.component';
import { PrincipalGestioComponent } from './containers/principal-gestio/principal-gestio.component';
import {GestioPrincipalResolver} from "./service/gestio-principal.resolver";



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
  ],
  providers: [
    GestioPrincipalResolver
  ]
})
export class GestioModule { }
