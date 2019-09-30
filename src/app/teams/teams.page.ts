import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../auth/auth.service";
import { ModalController } from "@ionic/angular";
import { RemoveMemberModalPage } from "../modal/remove-member-modal/remove-member-modal.page";

@Component({
  selector: "app-teams",
  templateUrl: "teams.page.html",
  styleUrls: ["teams.page.scss"]
})
export class TeamsOverview implements OnInit {
  constructor(
    private authService: AuthService,
    public modalController: ModalController
  ) {}

  public members: Member[];
  public adding: boolean;
  public dataReturned: any;

  public ngOnInit() {
    this.members = [
      { name: "Justin", gender: "male" },
      { name: "Jeppe", gender: "male" },
      { name: "Sophia", gender: "female" },
      { name: "Alberto", gender: "male" }
    ];
    this.adding = false;
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
      console.log("im here");
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
