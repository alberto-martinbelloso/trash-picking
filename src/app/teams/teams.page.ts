import { Component, OnInit, OnChanges, SimpleChanges } from "@angular/core";
import { AuthService } from "./../auth/auth.service";
import { ModalController } from "@ionic/angular";
import { RemoveMemberModalPage } from "../modal/remove-member-modal/remove-member-modal.page";
import { User } from "../auth/user";
import { Storage } from "@ionic/storage";
import { Observable, of } from "rxjs";
import { Router, ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-teams",
  templateUrl: "teams.page.html",
  styleUrls: ["teams.page.scss"]
})
export class TeamsOverview implements OnInit {
  constructor(
    private authService: AuthService,
    public modalController: ModalController,
    private storage: Storage,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public members$: Observable<User[]>;
  public adding: boolean;
  public user: User;
  public team: string;
  public errorMessage: string;

  public ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.adding = false;
      this.storage.get("USER").then(user => {
        this.user = user;
        this.team = this.user.teamName;
        this.members$ = this.authService.getTeamMembers(this.team);
      });
    });
  }

  public addMember(form) {
    this.authService.addMember(form.value.email, this.team).subscribe(res => {
      if (res.error) {
        this.errorMessage = res.error;
      } else {
        this.members$ = of(res);
        this.router.navigateByUrl("tabs/teams");
      }
    });
    this.adding = false;
  }

  async openModal(member: User) {
    const modal = await this.modalController.create({
      component: RemoveMemberModalPage,
      componentProps: member,
      cssClass: "my-custom-modal-css"
    });

    modal.onDidDismiss().then(dataReturned => {
      if (dataReturned.data) {
        this.members$ = this.authService.removeMember(member);
      }
    });

    await modal.present();
  }

  createOrJoinTeam() {
    this.router.navigateByUrl("/create-join-team");
  }

  logout() {
    this.authService.logout();
  }
}
