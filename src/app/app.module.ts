import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { InputComponent } from './components/input/input.component';
import { ButtonSearchComponent } from './components/button-search/button-search.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { HomeComponent } from './pages/home/home.component';
import { AlertComponent } from './components/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonSearchComponent,
    ListItemsComponent,
    CardUserComponent,
    HomeComponent,
    AlertComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
