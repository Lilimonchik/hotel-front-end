import {Component, OnInit} from "@angular/core";
import {RoomService} from "../../services/room.service";
import {Newroom} from "../../interfaces/newroom";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  styleUrls: ['add-new-room.component.css'],
  templateUrl: "add-new-room.component.html"
  }
)
export class AddNewRoomComponent implements OnInit{
  constructor(private newroom: RoomService, private rout: Router) {}

  addNewRoom: FormGroup;

  urlPhoto: File;
  ngOnInit() {
    this.addNewRoom = new FormGroup({
      price: new FormControl('',[Validators.required]),
      countOfPeople: new FormControl('',[Validators.required]),
      countRoom: new FormControl('',[Validators.required]),
      count: new FormControl('',[Validators.required]),
      category: new FormControl('', [Validators.required])
    })
  }
  createnewroom(){
    const formValue = this.addNewRoom.value;
    const db = new FormData();
    db.append("price",formValue.price)
    db.append("countOfPeople",formValue.countOfPeople)
    db.append("countRoom",formValue.countRoom)
    db.append("count",formValue.count)
    db.append("category",formValue.category)
    db.append("fileUrl",this.urlPhoto)
      this.newroom.addnewroom(db).subscribe(res =>{
        alert("Successful!");
      });
      this.rout.navigate(["/rooms"])
}
  uploadFile(event){
    this.urlPhoto = event.target.files[0];
  }
}
