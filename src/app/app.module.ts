import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrentComponent } from './current/current.component';
import { PreviousComponent } from './previous/previous.component';
import { NextComponent } from './next/next.component';
import { PageHandlerService } from './page-handler.service';
import { HtmlBoxComponent } from './html-box/html-box.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentComponent,
    PreviousComponent,
    NextComponent,
    HtmlBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PageHandlerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
