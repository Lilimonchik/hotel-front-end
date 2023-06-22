import {Component, OnDestroy, OnInit} from "@angular/core";
import {RoomService} from "../../services/room.service";
import {Rooms} from "../../interfaces/rooms";
import {dtoService} from "../../services/dto.service";
import {CategoryDTO} from "../../DTO/CategoryDTO";
import {RoomsstoreService} from "../../services/roomsstore.service";
import {User} from "../../interfaces/user";
import {AuthService} from "../../services/auth.service";
import {SingalRService} from "../../services/singal-r.service";
import {HubConnection, HubConnectionBuilder} from "@aspnet/signalr";
import * as signalIR from "@microsoft/signalr";
import {Subject, Subscription} from "rxjs";

@Component({
  templateUrl:'./room.component.html',
  styleUrls:['./room.component.css']
})

export class RoomComponent implements OnInit, OnDestroy {
  constructor(private Rooms: RoomService, private Category: dtoService, private userinfo: RoomsstoreService, private auth: AuthService, private signalRService: SingalRService) {
  }


  public Room : Rooms[]=[];
  public CategoryId : CategoryDTO;

  public User: User;

  public RoomFitler: Rooms[] = [];
  public Count = 0;

  ngOnInit() {
    this.Rooms.getRoom().subscribe((res) => {
      this.Room = res;
      this.RoomFitler = res;
    });
    if (this.isAuthenticated()) {
      this.userinfo.getInfoAboutUser().subscribe(res => {
        this.User = res;
      });
    }
    this.signalRService.startConnection();
    this.signalRService.roomFilter$.subscribe(roomFilter => {
      this.RoomFitler.push(roomFilter);
      console.log(this.RoomFitler);
    });
  }
  ngOnDestroy() {

  }

  filterData(type: string){
    if(type=="Premiume" || type=="Business" || type=="Econome"){
      this.RoomFitler = this.Room.filter(x=>x.categoryName==type);
    }
    else if(Number(type)==4 || Number(type)==2){
      this.RoomFitler = this.Room.filter(x=>x.countOfPeople==Number(type))
    }
    else{
      this.RoomFitler = this.Room;
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
