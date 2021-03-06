import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./tabs/tabs.module").then(m => m.TabsPageModule)
  },
  {
    path: "register",
    loadChildren: "./auth/register/register.module#RegisterPageModule"
  },
  { path: "login", loadChildren: "./auth/login/login.module#LoginPageModule" },
  {
    path: "create-team",
    loadChildren: "./auth/create-team/create-team.module#CreateTeamPageModule"
  },
  { path: 'add-member', loadChildren: './auth/add-member/add-member.module#AddMemberPageModule' },
  { path: 'create-join-team', loadChildren: './auth/create-join-team/create-join-team.module#CreateJoinTeamPageModule' },
  { path: 'show-profile', loadChildren: './auth/show-profile/show-profile.module#ShowProfilePageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
