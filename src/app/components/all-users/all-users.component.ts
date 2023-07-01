import {Component, OnInit} from '@angular/core';
import {RoomsstoreService} from "../../services/roomsstore.service";
import {User} from "../../interfaces/user";
import {UserDTO} from "../../DTO/UserDTO";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit{
  constructor(private user: RoomsstoreService) {
  }

  public  userInfo: UserDTO[]=[];

  ngOnInit() {
    this.user.getAllUsers().subscribe(res=>{
      this.userInfo = res;
    })
  }
}
