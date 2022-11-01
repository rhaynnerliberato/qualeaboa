import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { CarouselModule } from './componentes/carousel/carousel.module';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NavbarModule } from './componentes/navbar/navbar.module';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    NavbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
