import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
import { RestaurentDetailComponent } from './restaurent-detail/restaurent-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RestaurentListComponent,
    RestaurentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
