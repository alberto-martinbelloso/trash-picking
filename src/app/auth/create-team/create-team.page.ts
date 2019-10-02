import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../auth.service";
import { Router } from "@angular/router";
import { Storage } from "@ionic/storage";
import { User } from "../user";

@Component({
  selector: "app-create-team",
  templateUrl: "./create-team.page.html",
  styleUrls: ["./create-team.page.scss"]
})
export class CreateTeamPage implements OnInit {
  public user: User;
  constructor(
    private authService: AuthService,
    private router: Router,
    private storage: Storage
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
      this.router.navigateByUrl("tabs/map");
    });
  }
}
