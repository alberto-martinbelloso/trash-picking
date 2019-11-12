import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.page.html",
  styleUrls: ["./register.page.scss"]
})
export class RegisterPage implements OnInit {
  public errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  register(form) {
    this.authService.register(form.value).subscribe(res => {
      if (res.error) {
        this.errorMessage = res.error;
      } else {
        this.router.navigateByUrl("/create-join-team");
      }
    });
  }
}
