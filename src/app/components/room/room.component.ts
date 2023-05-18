import {Component, OnInit} from "@angular/core";
import {RoomService} from "../../services/room.service";
import {Rooms} from "../../interfaces/rooms";
import {dtoService} from "../../services/dto.service";
import {CategoryDTO} from "../../DTO/CategoryDTO";
import {RoomsstoreService} from "../../services/roomsstore.service";
import {User} from "../../interfaces/user";
import {AuthService} from "../../services/auth.service";

@Component({
  templateUrl:'./room.component.html',
  styleUrls:['./room.component.css']
})

export class RoomComponent implements OnInit {
  constructor(private Rooms: RoomService, private Category: dtoService, private userinfo: RoomsstoreService, private auth: AuthService) {
  }

  public Room: Rooms[] = [];

  public CategoryId : CategoryDTO;

  public User: User;

  public Count = 0;
  ngOnInit() {
    this.Rooms.getRoom().subscribe(res => {
      this.Room = res
    })
    if(this.isAuthenticated()){
      this.userinfo.getInfoAboutUser().subscribe(res=>{
        this.User = res;
      })
    }
  }
  isAuthenticated(){
    return this.auth.isAuthenticated();
  }
  getinfo(){
    this.userinfo.getInfoAboutUser().subscribe(res=>{
      this.User = res;
    })
  }
  getCategory(Id: string) {
    this.Category.getCategoryname(Id).subscribe( res =>{
      this.CategoryId = res
    });
  }
  addCart(RoomId: string,count: number){
    this.Rooms.addtocart(RoomId,count).subscribe(res=>{
      alert("Successful!");
    });
  }
}
