import {Component, OnInit} from "@angular/core";
import {ACCESS_TOKEN_KEY, AuthService} from "../../services/auth.service";
import {RoomsstoreService} from "../../services/roomsstore.service";
import {Order} from "../../interfaces/order";
import {User} from "../../interfaces/user";
import {CartItem} from "../../interfaces/cartItem";

@Component({
  selector: "app-user-cabinet",
  templateUrl:'user-cabinet.component.html',
  styleUrls: ['user-cabinet.component.css']
})

export  class UserCabinetComponent implements OnInit{
  constructor(private auth: AuthService,
              private order: RoomsstoreService,
              private user: RoomsstoreService,
              private cartIteam: RoomsstoreService) {
  }

  public  check = '';

  public users: User;

  public  carts: CartItem[]=[];
  ngOnInit(): void {
    this.user.getInfoAboutUser().subscribe(res=>{
      this.users = res;
    })
  }
  logOut(){
    return this.auth.logout();
  }

  checkUser(user: User):boolean{
    return this.auth.checkUser(user);
  }
}
