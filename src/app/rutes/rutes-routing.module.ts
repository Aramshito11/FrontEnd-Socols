import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'gestio',
    pathMatch: "full"
  },
  {
    path: 'gestio',
    loadChildren: () => import('./gestio/gestio.module').then((m) => m.GestioModule),
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
export class RutesRoutingModule { }
