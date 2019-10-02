import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { Storage } from "@ionic/storage";
import { Location } from "@angular/common";

@Component({
  selector: "app-show-profile",
  templateUrl: "./show-profile.page.html",
  styleUrls: ["./show-profile.page.scss"]
})
export class ShowProfilePage implements OnInit {
  public user: User;

  constructor(private storage: Storage, private location: Location) {}

  ngOnInit() {
    this.storage.get("USER").then(user => {
      this.user = user;
    });
  }

  goBack() {
    this.location.back();
  }
}
