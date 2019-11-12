import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  public isLoggedIn$: Observable<boolean>;

  public errorMessage: string;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn();
  }

  login(form) {
    this.authService.login(form.value).subscribe(res => {
      if (res.error) {
        this.errorMessage = res.error;
      } else {
        this.router.navigateByUrl("tabs/map");
      }
    });
  }
}
