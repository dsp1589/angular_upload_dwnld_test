import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent }  from './app.component';
import {UploadComponent} from './upload_component/upload.component';


@NgModule({
  imports:      [ BrowserModule,HttpClientModule ],
  declarations: [ AppComponent,UploadComponent ],
  bootstrap:    [ AppComponent,UploadComponent ]
})
export class AppModule { }
