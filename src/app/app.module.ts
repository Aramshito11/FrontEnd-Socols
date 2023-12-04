import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {HeaderComponent} from './core/header/header.component';
import {PrincipalComponent} from "./rutes/gestio/components/principal/principal.component";
import {PrincipalGestioComponent} from "./rutes/gestio/containers/principal-gestio/principal-gestio.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    PrincipalGestioComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
