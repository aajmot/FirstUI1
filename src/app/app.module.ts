import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


import {UserService} from '././user.service';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ClientComponent } from './client/client.component';
import { DataTableComponent } from './data-table/data-table.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', pathMatch: 'full', component: HomeComponent },
  { path: 'client', pathMatch: 'full', component: ClientComponent },
  // otherwise redirect to home
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    SideBarComponent,
    HeaderComponent,
    FooterComponent,
    ClientComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
  providers: [UserService, HttpModule, HttpClientModule],
  bootstrap:
    [
      AppComponent,
      NavBarComponent,
      SideBarComponent,
      HeaderComponent,
      FooterComponent
    ]
})
export class AppModule implements OnInit {

  constructor(public user: UserService) { }

  ngOnInit() {
  }

}
