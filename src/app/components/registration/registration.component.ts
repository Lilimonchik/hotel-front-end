import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl:'./registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {


  constructor(private auth: AuthService,
              private rout: Router) {
  }

  registration(FirstName: string, SecondName: string, Email: string, Birthday: string, UserName: string, Password: string){
    this.auth.registration(FirstName,SecondName,Email,Birthday,UserName,Password).subscribe(res=>{
    }, error => {
      console.log(error);
    });
    this.rout.navigate(["/sing-in"]);
  }
}
