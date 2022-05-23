import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true; //password

  title = 'task';

  //email
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  constructor(private formBuilder: FormBuilder) { }

  form = this.formBuilder.group({
    fullname: ['', [Validators.required]],
    add: ['', [Validators.required]],
    pass:['',[Validators.required]],
    email: ['', [Validators.required]],
  });

  //only numbers
  numbers(event: { keyCode: number; preventDefault: () => void; }) {
    this.onlyNumber(event);
  }
  onlyNumber(event: { keyCode: number; preventDefault: () => void; }) {
    var inp = String.fromCharCode(event.keyCode);
    if (/[0-9 ]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

//alphabets only
  alphaNumberOnly(e: { charCode: number; which: number; preventDefault: () => void; }) {  // Accept only alpha numerics, not special characters
    var regex = new RegExp("^[a-zA-Z0-9 ]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
      return true;
    }
    e.preventDefault();
    return false;
  }
  onPaste(e: { preventDefault: () => void; }) {
    e.preventDefault();
    return false;
  }



  


  ngOnInit(): void {
  }

}
