import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from './models/user';
// import { AccountService } from './services/accounts.service';
const USER_DATA = [
  {
    id: 1,
    name: 'John Smith',
    email: 'Advisor',
    username: 'hshs',
    password: '123@123',
    address: 'udwada,india',
  },

  {
    id: 2,
    name: 'Muhi Masri',
    email: 'Developer',
    username: 'hshsgyyy',
    password: '123@123',
    address: 'udwada,india',

  }
];
const COLUMNS_SCHEMA = [
  {
    key: 'name',
    type: 'text',
    label: ' Name',
  },
  {
    key: 'email',
    type: 'text',
    label: 'Email',
  },
  {
    key: 'username',
    type: 'text',
    label: 'Username',
  },
  {
    key: 'password',
    type: 'text',
    label: 'Password',
  },
  {
    key: 'address',
    type: 'text',
    label: 'Address',
  },
  {
    key: 'isEdit',
    type: 'isEdit',
    label: '',
  },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  hide = true; //password

  title = 'task';

  user: User | undefined;

  //email
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }


  constructor(private formBuilder: FormBuilder,
    // private accountService: AccountService
  ) {
    // this.accountService.user.subscribe(x => this.user = x);
  }

  form = this.formBuilder.group({
    fullname: ['', [Validators.required]],
    add: ['', [Validators.required]],
    pass: ['', [Validators.required]],
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


  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;
  addRow() {
    const newRow = {
      id: Date.now(),
      name: '',
      email: '',
      username: '',
      password: '',
      address: '',
      isEdit: true,
    };
    this.dataSource = [newRow, ...this.dataSource];
  }
  removeRow(id: number) {
    this.dataSource = this.dataSource.filter((u) => u.id !== id);
  }

  // logout() {
  //   this.accountService.logout();
  // }

}
