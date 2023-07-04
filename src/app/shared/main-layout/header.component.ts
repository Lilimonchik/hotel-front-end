import {Component, OnInit} from '@angular/core';
import {enviroment} from "../../../environments/enviroment";
import {AuthService} from "../../services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {RegistrationComponent} from "../../components/registration/registration.component";
import {RegistrationPageComponent} from "../../components/registration-page/registration-page.component";
import {RoomsstoreService} from "../../services/roomsstore.service";
import {UserDTO} from "../../DTO/UserDTO";
import {User} from "../../interfaces/user";
import {Role} from "../../DTO/UserDTO";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  constructor(private auth: AuthService,
              public dialog: MatDialog,

              public user: RoomsstoreService) {
  }
  public roleUser: Role;

  ngOnInit() {
    this.getUserInfo();
  }

  opened : boolean = false;
  menuOpen: boolean = false;

  showFiller = false;

  public check: boolean;
  public userInfo: User;

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
  getUserInfo(){
    this.user.getInfoAboutUser().subscribe(res => {
      this.userInfo = res;
    })
  }

  checkUser(user: User): boolean{
    return this.auth.checkUser(user);
  }
}
