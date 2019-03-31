import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { HttpClientModule }    from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { SubMenuComponent } from './sub-menu/sub-menu.component';
import { ContentComponent } from './content/content.component';
import { TestWsComponent } from './test-ws/test-ws.component';



@NgModule({
  declarations: [
    AppComponent,MainMenuComponent, SubMenuComponent, ContentComponent, TestWsComponent
  ],
  imports: [
    BrowserModule,
       HttpClientModule,FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
