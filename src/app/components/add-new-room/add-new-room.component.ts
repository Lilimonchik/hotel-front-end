import {Component} from "@angular/core";
import {RoomService} from "../../services/room.service";
import {Newroom} from "../../interfaces/newroom";
import {Router} from "@angular/router";

@Component({
  styleUrls: ['add-new-room.component.css'],
  templateUrl: "add-new-room.component.html"
  }
)
export class AddNewRoomComponent {
  constructor(private newroom: RoomService, private rout: Router) {}

    createnewroom(price: string, countPeople:string, countRoom:string, count:string,category:string){
      this.newroom.addnewroom(price, countPeople, countRoom, count,category).subscribe(res =>{
        alert("Successful!");
      });
      this.rout.navigate(["/rooms"])
}
}
