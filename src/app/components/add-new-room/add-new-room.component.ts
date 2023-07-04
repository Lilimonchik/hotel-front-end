import {Component, OnInit} from "@angular/core";
import {RoomService} from "../../services/room.service";
import {Newroom} from "../../interfaces/newroom";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {SingalRService} from "../../services/singal-r.service";
import {AuthService} from "../../services/auth.service";

@Component({
  styleUrls: ['add-new-room.component.css'],
  templateUrl: "add-new-room.component.html"
  }
)
export class AddNewRoomComponent implements OnInit{
  constructor(private newroom: RoomService, private rout: Router,private signal: SingalRService,private auth: AuthService) {}

  addNewRoom: FormGroup;

  urlPhoto: File;

  isLoading: boolean = false;
  public check: boolean = false;
  ngOnInit() {
    this.addNewRoom = new FormGroup({
      price: new FormControl('',[Validators.required]),
      countOfPeople: new FormControl('',[Validators.required]),
      countRoom: new FormControl('',[Validators.required]),
      count: new FormControl('',[Validators.required]),
      about: new FormControl('',[Validators.required]),
      category: new FormControl('', [Validators.required])
    })
  }
  createnewroom(){
    this.isLoading = true;
    const formValue = this.addNewRoom.value;
    const db = new FormData();
    db.append("price",formValue.price)
    db.append("countOfPeople",formValue.countOfPeople)
    db.append("countRoom",formValue.countRoom)
    db.append("count",formValue.count)
    db.append("about",formValue.about)
    db.append("category",formValue.category)
    db.append("fileUrl",this.urlPhoto)
      this.newroom.addnewroom(db).subscribe(res =>{
        console.log("Successful!")
        this.rout.navigate(["/rooms"])
      }, error => {
        this.auth.getText("Op's! Something was wrong!");
        console.log("Bad!");
        this.start();
        this.isLoading = false;

    }
      );
}
  start(){
    if(!this.check){
      this.check = !this.check;
    }
    this.auth.start(()=>{
      this.check = !this.check;
    })
  }
  uploadFile(event){
    this.urlPhoto = event.target.files[0];
  }
}
