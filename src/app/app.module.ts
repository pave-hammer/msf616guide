import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { navbar } from './components/navbar/navbar.component';
import { home } from './components/home/home.component';
import { raid } from './components/raid/raid.component';
import { war } from './components/war/war.component';
import { farm } from './components/farm/farm.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: home},
  {path: 'farm', component: farm},
  {path: 'raid', component: raid},
  {path: 'war', component: war}
]

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, HelloComponent, navbar, home, raid, war, farm ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
