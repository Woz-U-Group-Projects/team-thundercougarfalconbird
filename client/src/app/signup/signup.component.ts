import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { UserService } from "../user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  // initialize an empty user object
  // we need to do this so the property binding works [(ngModel)]
  user: User = new User();

  constructor(private userService: UserService, private router: Router) {}

  signup(): void {
    this.userService.signupUser(this.user).subscribe(() => {
      // user registered, send them to the login page
      this.router.navigate(["/login"]);
    });
  }
  ngOnInit() {}
}
