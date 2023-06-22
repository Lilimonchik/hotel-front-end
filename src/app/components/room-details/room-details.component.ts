import { Component } from '@angular/core';
import {AppRoutingModule} from "../../app-routing.module";
import {ActivatedRoute} from "@angular/router";
import {Rooms} from "../../interfaces/rooms";
import {RoomService} from "../../services/room.service";

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent {
  roomId: string;

  public room: Rooms;

  constructor(private route: ActivatedRoute,
              private rooms: RoomService
              ) {}

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
    });
  }
}
