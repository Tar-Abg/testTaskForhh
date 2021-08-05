import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {TableComponent} from './components/table/table.component';
import {AddUserComponent} from './components/add-user/add-user.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MessageComponent } from './components/message/message.component';
import { UserComponent } from './components/user/user.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    AddUserComponent,
    MessageComponent,
    UserComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
