import { Component } from '@angular/core';
import {enviroment} from "../../../environments/enviroment";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private auth: AuthService) {
  }
  menuOpen: boolean = false;

  isAuthenticated(){
    return this.auth.isAuthenticated();
  }
  logOut(){
    return this.auth.logout();
  }
  openMenu(){
    this.menuOpen = !this.menuOpen;
  }
}
