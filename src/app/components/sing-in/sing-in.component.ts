import {Component, OnDestroy, OnInit} from "@angular/core";
import {FormControl, FormGroup, FormsModule, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {enviroment} from "../../../environments/enviroment";
@Component({
  selector: 'app-sing-in',
  templateUrl:'./sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})

export class SingInComponent implements OnInit{
  constructor(private auth: AuthService,
              private router: Router) {
  }
  singInForm: FormGroup;
  public isSingIn: boolean = false;
  ngOnInit() {
    this.singInForm = new FormGroup({
      userName: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
    })
  }

  login(){
    this.isSingIn = true;
    this.auth.login(this.singInForm.value)
      .subscribe((res)=>{
        console.log(res.access_token.sub());
        this.router.navigate(['/cart'])
      },error => {
        alert("Wrong username or password!")
        this.isSingIn = false;
      })
  }
  logout(){
    this.auth.logout();
  }
}
