import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../auth/auth.service";
import { ModalController } from "@ionic/angular";
import { RemoveMemberModalPage } from "../modal/remove-member-modal/remove-member-modal.page";
import { User } from "../auth/user";
import { Storage } from "@ionic/storage";

@Component({
  selector: "app-teams",
  templateUrl: "teams.page.html",
  styleUrls: ["teams.page.scss"]
})
export class TeamsOverview implements OnInit {
  constructor(
    private authService: AuthService,
    public modalController: ModalController,
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

  public members: Member[];
  public adding: boolean;
  public user: User;
  public team: string;

  public ngOnInit() {
    this.members = [
      { name: "Justin", gender: "male" },
      { name: "Jeppe", gender: "male" },
      { name: "Sophia", gender: "female" },
      { name: "Alberto", gender: "male" }
    ];
    this.adding = false;
    this.storage.get("USER").then(user => {
      this.user = user;
      this.team = this.user.teamName;
    });
  }

  public addMember(form) {
    this.members.push(form.value);
    this.adding = false;
  }

  async openModal(member: Member) {
    const modal = await this.modalController.create({
      component: RemoveMemberModalPage,
      componentProps: member,
      cssClass: "my-custom-modal-css"
    });

    modal.onDidDismiss().then(dataReturned => {
      if (dataReturned.data) {
        this.members = this.members.filter(function(el) {
          return el !== member;
        });
      }
    });

    await modal.present();
  }

  logout() {
    this.authService.logout();
  }
}

export interface Member {
  name: string;
  gender: string;
}
