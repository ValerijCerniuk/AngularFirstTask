import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreetingComponent } from './component/greeting/greeting.component';
import { ContactComponent } from './component/contact/contact.component';
import { UserListComponent } from './component/user-list/user-list.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    ContactComponent,
    UserListComponent,
    TopBarComponent,
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
