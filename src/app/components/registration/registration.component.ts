import {Component, OnInit} from "@angular/core";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {RoomsstoreService} from "../../services/roomsstore.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-registration',
  templateUrl:'./registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit{


  constructor(private auth: AuthService,
              private rout: Router,

              private user: RoomsstoreService){
  }

  registrationForm: FormGroup;

  public isRegistration: boolean = false;

  public isSingIn: boolean = false;

  public singInForm: FormGroup;

  public  check: boolean = false;

  public userInfo: User;

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
  start(){
    if(!this.check){
      this.check = !this.check;
    }
    this.auth.start(()=>{
      this.check = !this.check;
    })
  }

  registration(){
    this.isRegistration = true;
    this.auth.registration(this.registrationForm.value).subscribe(res=>{
      console.log("Successful!")
      this.rout.navigate(["/sing-in"]);
    }, error => {
      this.auth.getText("User with this username has already registered!");
      this.start();
      this.isRegistration = false;
    });
  }
  singIn(){
    this.isSingIn = true;
    this.auth.login(this.singInForm.value)
      .subscribe((res)=>{
        this.user.getInfoAboutUser().subscribe(res=>{
          this.userInfo = res;
          this.checkUser();
        })
      },error => {
        this.auth.getText("Wrong username or password!");
        this.isSingIn = false;
      })
  }
  checkUser(){
    if(this.userInfo.role==1){
      this.rout.navigate(['/all-orders']);
    }
    else if(this.userInfo.role==0){
      this.rout.navigate(['/cart'])
    }
  }
}
