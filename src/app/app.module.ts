import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { InquiryDetailsComponent } from './components/inquiry-details/inquiry-details.component';
import { LoginComponent } from './components/login/login.component';
import { PlannerComponent } from './components/planner/planner.component';
import { AccountComponent } from './components/account/account.component';

@NgModule({
  declarations: [AppComponent, InquiryDetailsComponent, LoginComponent, PlannerComponent, AccountComponent],
  imports: [BrowserModule,
  IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule { }
