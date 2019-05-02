import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from './shared/app-layout/app-layout/app-layout.component';
import { LoginLayoutComponent } from './shared/login-layout/login-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppLayoutComponent,
    LoginLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
