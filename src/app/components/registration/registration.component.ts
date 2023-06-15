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
              private rout: Router){
  }

  registrationForm: FormGroup;

  public isRegistration: boolean = false;

  public isSingIn: boolean = false;

  public singInForm: FormGroup;

  ngOnInit() {
    this.registrationForm = new FormGroup({
      firstName: new FormControl('',[Validators.required]),
      secondName: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      birthday: new FormControl('',[Validators.required]),
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
    this.singInForm = new FormGroup({
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
  singIn(){
    this.isSingIn = true;
    this.auth.login(this.singInForm.value)
      .subscribe((res)=>{
        console.log(res.access_token.sub());
        this.rout.navigate(['/cart'])
      },error => {
        alert("Wrong username or password!")
        this.isSingIn = false;
      })
  }
}
