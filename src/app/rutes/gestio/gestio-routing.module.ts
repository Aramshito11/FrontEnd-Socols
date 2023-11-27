import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {PrincipalComponent} from "./components/principal/principal.component";
import {GestioPrincipalResolver} from "./service/gestio-principal.resolver";
import {VideosComponent} from "./components/videos/videos.component";
import {PrincipalGestioComponent} from "./containers/principal-gestio/principal-gestio.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/principal',
    pathMatch: "full"
  },
  {
    path: 'principal',
    component: PrincipalComponent,
    resolve: {
      data: GestioPrincipalResolver
    }
  },
  {
    path: 'videos',
    component: VideosComponent,
    resolve: {
      data: GestioPrincipalResolver
    }
  },
  {
    path: 'principal-gestio',
    component: PrincipalGestioComponent,
    resolve: {
      data: GestioPrincipalResolver
    }
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class GestioRoutingModule { }
