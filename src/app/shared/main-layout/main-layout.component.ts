import { Component } from '@angular/core';
import {enviroment} from "../../../environments/enviroment";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent {
  constructor(private auth: AuthService) {
  }

  isAuthenticated(){
    return this.auth.isAuthenticated();
  }
  logOut(){
    return this.auth.logout();
  }
}
