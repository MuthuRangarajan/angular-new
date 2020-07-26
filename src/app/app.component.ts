import { Component, VERSION, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
 signupform: FormGroup;
 ngOnInit(){
this.signupform=new FormGroup({
  name: new FormControl(),
  qty: new FormControl()
})
 }
}
