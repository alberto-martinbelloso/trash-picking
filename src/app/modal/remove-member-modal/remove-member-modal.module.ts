import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { RemoveMemberModalPage } from './remove-member-modal.page';

const routes: Routes = [
  {
    path: '',
    component: RemoveMemberModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RemoveMemberModalPage]
})
export class RemoveMemberModalPageModule {}
