import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {ApiService} from "./core/api.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {routing} from "./app.routing";
import {TokenInterceptor} from "./core/interceptor";
import { AddTheatreComponent } from './add-theatre/add-theatre.component';
import { ListTheatreComponent } from './list-theatre/list-theatre.component';
import { EditTheatreComponent } from './edit-theatre/edit-theatre.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTheatreComponent,
    ListTheatreComponent,
    EditTheatreComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService, {provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi : true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
