import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../models/user';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService, private router: Router) {}

  signup(): void {
    this.userService.signupUser(this.user).subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
  ngOnInit() {
  }

}
