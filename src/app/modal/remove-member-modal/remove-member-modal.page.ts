import { Component, OnInit, Input } from "@angular/core";
import { ModalController, NavParams } from "@ionic/angular";
import { Member } from "src/app/teams/teams.page";

@Component({
  selector: "app-remove-member-modal",
  templateUrl: "./remove-member-modal.page.html",
  styleUrls: ["./remove-member-modal.page.scss"]
})
export class RemoveMemberModalPage implements OnInit {
  public name: string;

  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams
  ) {}

  ngOnInit() {
    this.name = this.navParams.data.name;
  }

  async closeModal(remove: boolean) {
    await this.modalCtrl.dismiss(remove);
  }
}
