import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../auth.service";
import { Router } from '@angular/router';

@Component({
  selector: "app-create-team",
  templateUrl: "./create-team.page.html",
  styleUrls: ["./create-team.page.scss"]
})
export class CreateTeamPage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  createTeam(form) {
    this.authService.createTeam(form.value).subscribe(res => {
      this.router.navigateByUrl("tabs/teams");
    });
  }
}
