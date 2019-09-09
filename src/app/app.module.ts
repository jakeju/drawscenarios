import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMatrixComponent } from './components/header-matrix/header-matrix.component';
import { DrawD3Component } from './components/draw-d3/draw-d3.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderMatrixComponent,
    DrawD3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
