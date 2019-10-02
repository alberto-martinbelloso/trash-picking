import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-show-profile',
  templateUrl: './show-profile.page.html',
  styleUrls: ['./show-profile.page.scss'],
})
export class ShowProfilePage implements OnInit {

  public user: User;

  constructor(private router: Router, private storage: Storage) { }

  ngOnInit() {
    this.storage.get("USER").then(user => {
      console.log(user);
      this.user = user;
    });
  }

}
