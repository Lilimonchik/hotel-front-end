import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoomComponent} from "../room/room.component";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration-page',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss']
})
export class RegistrationPageComponent implements OnInit{

  constructor(private auth: AuthService,
              private rout: Router) {
  }
  registrationForm: FormGroup;

  public isRegistration: boolean = false;

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      secondName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      birthday: new FormControl('',[Validators.required]),
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  registration(){
    this.isRegistration = true;
    this.auth.registration(this.registrationForm.value).subscribe(res=>{
      console.log("Successful!")
      this.rout.navigate(["/sing-in"]);
    }, error => {
      console.log(error);
      this.isRegistration = false;
    });
  }
}
