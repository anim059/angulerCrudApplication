import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './Mycomponents/user-list/user-list.component';
import { HighlightDirective } from './highlight.directive';
import { UserLoginComponent } from './Mycomponents/user-login/user-login.component';
import { HeroesComponent } from './Mycomponents2/heroes/heroes.component';
import { HereDetailsComponent } from './Mycomponents2/here-details/here-details.component';
import { MessagesComponent } from './Mycomponents2/messages/messages.component';
import { DashboardComponent } from './Mycomponents2/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroSearchComponent } from './Mycomponents2/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HighlightDirective,
    UserLoginComponent,
    HeroesComponent,
    HereDetailsComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
