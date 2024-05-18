import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeBodyComponent } from './home-body/home-body.component';
import { SocialsFooterComponent } from './socials-footer/socials-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeBodyComponent,
    SocialsFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
