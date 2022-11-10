import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './componentes/carousel/carousel.component';
import { CarouselModule } from './componentes/carousel/carousel.module';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { NavbarModule } from './componentes/navbar/navbar.module';
import { PaginationComponent } from './componentes/paginations/pagination.component';
import { CardsComponent } from './componentes/cards/cards.component';
import { CardsModule } from './componentes/cards/cards.module';
import { PaginationModule } from './componentes/paginations/pagination.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    NavbarComponent,
    PaginationComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    NavbarModule,
    PaginationModule,
    CardsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
