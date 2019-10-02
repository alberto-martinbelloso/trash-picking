import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap, catchError } from "rxjs/operators";
import { Observable, BehaviorSubject, of } from "rxjs";

import { Storage } from "@ionic/storage";
import { User } from "./user";
import { AuthResponse, TeamResponse } from "./auth-response";
import { Team } from "./team";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  AUTH_SERVER_ADDRESS: string = "http://ec2-13-58-209-11.us-east-2.compute.amazonaws.com:3000";
  // AUTH_SERVER_ADDRESS: string = "http://localhost:3000";
  authSubject = new BehaviorSubject(false);

  constructor(private httpClient: HttpClient, private storage: Storage) {}

  register(user: User): Observable<AuthResponse> {
    return this.httpClient
      .post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/register`, user)
      .pipe(
        tap(async (res: AuthResponse) => {
          if (res.user) {
            await this.storage.set("ACCESS_TOKEN", res.user.access_token);
            await this.storage.set("EXPIRES_IN", res.user.expires_in);
            await this.storage.set("USER", res.user);
            this.authSubject.next(true);
          }
        })
      );
  }

  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post(`${this.AUTH_SERVER_ADDRESS}/login`, user).pipe(
      tap(async (res: AuthResponse) => {
        if (res.user) {
          await this.storage.set("ACCESS_TOKEN", res.user.access_token);
          await this.storage.set("EXPIRES_IN", res.user.expires_in);
          await this.storage.set("USER", res.user);
          this.authSubject.next(true);
        }
      })
    );
  }

  createTeam(team: Team, user: User): Observable<any> {
    const body = {
      team: team,
      user: user
    };
    return this.httpClient
      .post<any>(`${this.AUTH_SERVER_ADDRESS}/create-team`, body)
      .pipe(
        tap(async (res: any) => {
          if (res) {
            user.teamName = res.teamName;
            await this.storage.set("USER", user);
            this.authSubject.next(true);
          }
        })
      );
  }

  joinTeam(team: Team, user: User): Observable<any> {
    const body = {
      team: team,
      user: user
    };
    return this.httpClient
      .post<any>(`${this.AUTH_SERVER_ADDRESS}/join-team`, body)
      .pipe(
        tap(async (res: any) => {
          if (res) {
            user.teamName = res.teamName;
            await this.storage.set("USER", user);
            this.authSubject.next(true);
          }
        })
      );
  }

  getTeamMembers(teamName: string): Observable<User[]> {
    const body = {
      teamName: teamName
    };
    return this.httpClient
      .post(`${this.AUTH_SERVER_ADDRESS}/get-team-members`, body)
      .pipe(
        tap(async (res: any) => {
          if (res) {
            return res;
          }
        })
      );
  }

  addMember(email: string, teamName: string): Observable<any> {
    const body = {
      email: email,
      teamName: teamName
    };
    return this.httpClient
      .post(`${this.AUTH_SERVER_ADDRESS}/add-member`, body)
      .pipe(
        tap(async (res: any) => {
          if (res) {
            return res;
          }
        })
      );
  }

  removeMember(member: User): Observable<any> {
    return this.httpClient
      .post(`${this.AUTH_SERVER_ADDRESS}/remove-member`, member)
      .pipe(
        tap(async (res: any) => {
          if (res) {
            return res;
          }
        })
      );
  }

  async logout() {
    await this.storage.remove("ACCESS_TOKEN");
    await this.storage.remove("EXPIRES_IN");
    this.authSubject.next(false);
  }

  isLoggedIn() {
    return this.authSubject.asObservable();
  }
}
