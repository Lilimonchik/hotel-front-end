import { Component } from '@angular/core';
import {AppRoutingModule} from "../../app-routing.module";
import {ActivatedRoute} from "@angular/router";
import {Rooms} from "../../interfaces/rooms";
import {RoomService} from "../../services/room.service";
import {AllIformationAboutRoom} from "../../interfaces/AllIformationAboutRoom";
import {AuthService} from "../../services/auth.service";
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent {
  roomId: string;

  public room: AllIformationAboutRoom;

  loading$ = this.loader.loading$;

  constructor(private route: ActivatedRoute,
              private rooms: RoomService,

              private auth: AuthService,

              private loader: LoadingService,
              ) {}

  public check: boolean = false;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.roomId = params.get('id');
    });
    this.rooms.getProductById(this.roomId.toString()).subscribe(res=> {
      this.room = res;
    })
  }
  addCart(RoomId: string,count: number){
    this.rooms.addtocart(RoomId,count).subscribe(res=>{
      alert("Successful!");
    }, error => {
      this.auth.getText("Please, sing in or registration!");
      this.start();
    });
  }
  start(){
    if(!this.check){
      this.check = !this.check;
    }
    this.auth.start(()=>{
      this.check = !this.check;
    })
  }
}
