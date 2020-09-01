import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RepositoriesComponenet } from './repositories/repositories.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import {FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form/search-form.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    Repositories,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    Routingmodule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
