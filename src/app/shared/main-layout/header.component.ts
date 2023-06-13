import { Component } from '@angular/core';
import {enviroment} from "../../../environments/enviroment";
import {AuthService} from "../../services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {RegistrationComponent} from "../../components/registration/registration.component";
import {RegistrationPageComponent} from "../../components/registration-page/registration-page.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private auth: AuthService,
              public dialog: MatDialog) {
  }
  opened : boolean = false;
  menuOpen: boolean = false;

  showFiller = false;

  isAuthenticated(){
    return this.auth.isAuthenticated();
  }
  logOut(){
    return this.auth.logout();
  }
  openMenu(){
    this.menuOpen = !this.menuOpen;
  }

  openDialog(){
    const dialogRef = this.dialog.open(RegistrationComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
