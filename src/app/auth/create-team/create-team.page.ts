import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../auth.service";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { User } from "../user";
import { Location } from "@angular/common";

@Component({
  selector: "app-create-team",
  templateUrl: "./create-team.page.html",
  styleUrls: ["./create-team.page.scss"]
})
export class CreateTeamPage implements OnInit {
  public user: User;
  public errorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: Storage,
    private location: Location
  ) {
    this.user = {
      email: "",
      name: "",
      password: "",
      teamId: 0,
      teamName: "",
      userId: 0
    };
  }

  ngOnInit() {
    this.storage.get("USER").then(user => {
      this.user = user;
    });
  }

  createTeam(form) {
    this.authService.createTeam(form.value, this.user).subscribe(res => {
      if (res.error) {
        this.errorMessage = res.error;
      } else {
        this.router.navigateByUrl("tabs/map");
      }
    });
  }

  goBack() {
    this.location.back();
  }
}
