import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ButtonSearchComponent } from './components/button-search/button-search.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { CardUserComponent } from './components/card-user/card-user.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    InputSearchComponent,
    ButtonSearchComponent,
    ListItemsComponent,
    CardUserComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
