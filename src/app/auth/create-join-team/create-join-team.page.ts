import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";
import { User } from "../user";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-create-join-team",
  templateUrl: "./create-join-team.page.html",
  styleUrls: ["./create-join-team.page.scss"]
})
export class CreateJoinTeamPage implements OnInit {
  public user: User;
  public join: boolean;

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
    this.join = false;
  }

  createTeam() {
    this.router.navigateByUrl("/create-team");
  }

  joinTeam(form) {
    this.authService.joinTeam(form.value, this.user).subscribe(res => {
      this.router.navigateByUrl("/tabs/teams");
    });
  }
}
