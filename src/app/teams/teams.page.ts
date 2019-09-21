import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-teams",
  templateUrl: "teams.page.html",
  styleUrls: ["teams.page.scss"]
})
export class TeamsOverview implements OnInit {
  constructor() {}

  public members: Member[];
  public maxMembers: boolean;

  public ngOnInit() {
    this.members = [
      { name: "Justin", sex: "m" },
      { name: "Jeppe", sex: "m" },
      { name: "Sophia", sex: "f" },
      { name: "Joji", sex: "f" },
      { name: "Alberto", sex: "m" }
    ];
  }
}

export interface Member {
  name: string;
  sex: string;
}
