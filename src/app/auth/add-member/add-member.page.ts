import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-member",
  templateUrl: "./add-member.page.html",
  styleUrls: ["./add-member.page.scss"]
})
export class AddMemberPage implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  addMember(form) {
    console.log("Add member");
    this.router.navigateByUrl("tabs/teams");
  }
}
