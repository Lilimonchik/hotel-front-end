import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registration',
  templateUrl:'./registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit{


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
    }, error => {
      console.log(error);
      this.isRegistration = false;
    });
    this.rout.navigate(["/sing-in"]);
  }
}
