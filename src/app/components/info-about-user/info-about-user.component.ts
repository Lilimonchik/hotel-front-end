import {Component, OnInit} from "@angular/core";
import {RoomsstoreService} from "../../services/roomsstore.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-info-about-user',
  templateUrl: 'info-about-user.component.html',
  styleUrls: ['info-about-user.component.css']
})

export class InfoAboutUserComponent implements OnInit{
  constructor(private infoofuser: RoomsstoreService) {
  }

  public user: User;

  ngOnInit() {
    this.infoofuser.getInfoAboutUser().subscribe(res=>{
      this.user = res
      console.log(this.user);
    })
  }
}
