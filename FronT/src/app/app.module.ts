import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevcreateComponent } from './devcreate/devcreate.component';
import { DevupdateComponent } from './devupdate/devupdate.component';
import { DevdetailsComponent } from './devdetails/devdetails.component';
import { DevreadingComponent } from './devreading/devreading.component';
import { DevserviceService } from './services/devservice.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DevcreateComponent,
    DevupdateComponent,
    DevdetailsComponent,
    DevreadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DevserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
