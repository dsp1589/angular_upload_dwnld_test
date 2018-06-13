import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { 
  name = 'Angular'; 
  constructor( private http: HttpClient ) { //dependency injection, creating an instance of HttpClient called http

  }
}
