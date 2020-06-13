import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Routes, RouterModule } from  "@angular/router";

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RegisterComponent } from './register/register.component';
import { BaseService } from './base.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AddreportComponent } from './addreport/addreport.component';
import { ReportdetailComponent } from './reportdetail/reportdetail.component';
import { ReportsearchComponent } from './reportsearch/reportsearch.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BaseService],
    data: { 
             role: 'register'
          } 
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [BaseService]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [BaseService]
  },
  {
    path: 'addreport',
    component: AddreportComponent,
    canActivate: [BaseService]
  },
  {
    path: 'reportdetail',
    component: ReportdetailComponent,
    canActivate: [BaseService]
  },
  {
    path: 'reportsearch',
    component: ReportsearchComponent,
    canActivate: [BaseService]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports:      [ BrowserModule, FormsModule, IonicModule.forRoot(), RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, RegisterComponent, LoginComponent, HomeComponent, AddreportComponent, ReportdetailComponent, ReportsearchComponent ],
  bootstrap:    [ AppComponent ],
  providers: [BaseService]
})
export class AppModule { }
