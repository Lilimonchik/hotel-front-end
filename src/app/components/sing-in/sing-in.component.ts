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

export class SingInComponent {
  constructor(private auth: AuthService,
              private router: Router) {
  }
  login(UserName: string, Password: string){
    this.auth.login(UserName,Password)
      .subscribe((res)=>{
        console.log(res.access_token.sub());
        this.router.navigate(['/user-cabinet'])
      },error => {
        alert("Wrong username or password!")
      })
  }
  logout(){
    this.auth.logout();
  }
}
