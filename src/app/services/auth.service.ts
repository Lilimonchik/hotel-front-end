import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, Subject, tap} from 'rxjs';
import {Token} from "../interfaces/Token";
import {AUTH_API_URL} from "../app.injection-tokens";
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";
import jwt_decode from 'jwt-decode';
import {User} from "../interfaces/user";
import {singIn} from "../interfaces/singIn";
import * as signalIR from '@microsoft/signalr';
import {Rooms} from "../interfaces/rooms";
import {RoomService} from "./room.service";
export const ACCESS_TOKEN_KEY = 'bookstore_access_token';
@Injectable({
  providedIn:'root'
})

export class AuthService{

  constructor(private http: HttpClient,
              @Inject(AUTH_API_URL) private apiUrl: string,
              private jwtHelper: JwtHelperService,
              private router: Router,
              ) {
  }


  hubConnection: signalIR.HubConnection;

  public startConnection = () =>{
    this.hubConnection = new signalIR.HubConnectionBuilder()
      .withUrl("https://localhost:7095/signalRTest")
      .build();
    this.hubConnection.start().then(()=>{
      console.log("connected")
    })
      .catch(err => console.log("Error:" + err));
  }
  login(singIn: singIn): Observable<Token>{
      return this.http.post<Token>(`${this.apiUrl}LogInAction/LogIn`,singIn).pipe(
        tap(token=>{
          localStorage.setItem(ACCESS_TOKEN_KEY,token.access_token);
        })
      )
  }
  isAuthenticated(): boolean{
    var token = localStorage.getItem(ACCESS_TOKEN_KEY);
    return token && !this.jwtHelper.isTokenExpired(token);
  }
  logout():void{
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      this.router.navigate(['/']);
  }
  registration(User: User){
      return this.http.post(`${this.apiUrl}RegistrationAction/RegistrationNewUser`,User);
  }
  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch(Error) {
      return null;
    }
  }
}
