import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddReceptComponent } from './add-recept/add-recept.component';
import { AppRoutingModule } from './app-routing.module';
import { ReceptFormComponent } from './recept-form/recept-form.component';
import { ReceptenboxComponent } from './receptenbox/receptenbox.component';

import { HttpClientModule } from '@angular/common/http';  // <-Add here
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddReceptComponent,
    ReceptFormComponent,
    ReceptenboxComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }