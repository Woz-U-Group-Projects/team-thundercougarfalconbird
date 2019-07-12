import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { users } from '../../../../../models/users'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
