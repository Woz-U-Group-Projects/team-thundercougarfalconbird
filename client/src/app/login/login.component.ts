import { Component, OnInit } from "@angular/core";
import { User } from "../models/user";
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  user: User = new User();
  constructor(private userService: UserService, private router: Router) {}

  submitted = false;

  onSubmit() { this.submitted = true; }

  login(): void {
    this.userService.loginUser(this.user).subscribe(() => {
      this.userService.getProfile().subscribe(() => {
        // set the user to logged in
        this.userService.loggedIn = true;
        // send to the profile page
        this.router.navigate(["/profile"]);
      });
    });
  }

  ngOnInit() {}
}
