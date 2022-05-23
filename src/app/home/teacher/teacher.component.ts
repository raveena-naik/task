import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
const USER_DATA = [
  {
    id: 1,
    name: 'John Smith',
    email: 'Advisor',
    username: 'hshs',
    password:'123@123',
    address:'udwada,india',
  },

  {
    id: 2,
    name: 'Muhi Masri',
    email: 'Developer',
    username: 'hshsgyyy',
    password:'123@123',
    address:'udwada,india',

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
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {
  displayedColumns: string[] = COLUMNS_SCHEMA.map((col) => col.key);
  dataSource = USER_DATA;
  columnsSchema: any = COLUMNS_SCHEMA;
  addRow() {
    const newRow = {
      id: Date.now(),
      name: '',
      email: '',
      username:'',
      password:'',
      address:'',
      isEdit: true,
    };
    this.dataSource = [newRow, ...this.dataSource];
  }
  removeRow(id: number) {
    this.dataSource = this.dataSource.filter((u) => u.id !== id);
  } 

  constructor() { }

  ngOnInit(): void {
  }

}
