import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import {HttpClientModule} from "@angular/common/http";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule} from "@angular/forms";


const uri = 'http://localhost:4000/graphql'; // Reemplaza con la URL de tu servidor NestJS

export function createApollo(httpLink: HttpLink): any {
  return {
    link: httpLink.create({ uri }),
    cache: new InMemoryCache(),
  };
}
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatCheckboxModule,
    MatIconModule,
    MatButtonModule,

    ApolloModule,
    HttpClientModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
