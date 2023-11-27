import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {RutesModule} from "./rutes/rutes.module";
import {HeaderComponent} from './core/header/header.component';
import {PrincipalComponent} from "./rutes/gestio/components/principal/principal.component";
import {PrincipalGestioComponent} from "./rutes/gestio/containers/principal-gestio/principal-gestio.component";
import {VideosComponent} from "./rutes/gestio/components/videos/videos.component";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PrincipalComponent,
    PrincipalGestioComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
