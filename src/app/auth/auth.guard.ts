import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";
import { AuthService } from "./auth.service";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(public auth: AuthService) {}

  canActivate(): boolean {
    // return this.auth.isLoggedIn();
    return true;
  }
}
