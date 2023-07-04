import {Component, Inject, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AUTH_API_URL} from "../../app.injection-tokens";
import {RoomsstoreService} from "../../services/roomsstore.service";
import {CartItem} from "../../interfaces/cartItem";
import {AuthService} from "../../services/auth.service";

//import {CartComponent} from "../componentforusercabinet/cart/product.cart";

@Component({
  styleUrls:['create-order.component.css'],
  templateUrl: './create-order.component.html'
})

export class CreateOrderComponent implements OnInit{
  constructor(private order: RoomsstoreService,
              private auth: AuthService,

              private route: Router
              ) {
  }
  //public ordertotalprice = this.room.totalPrice;

  public price = 0;

  public promocode = " ";

  public cartiteams: CartItem[] = [];

  public check: boolean = false;

  ngOnInit() {
    this.order.getCartIteam().subscribe(res =>{
      this.cartiteams = res;
      this.countTotal();
    });
    this.price = 0;
  }
  neworder(promocode: string){
    this.order.createOrder(promocode).subscribe(res=>{
      this.auth.getText("Successful!");
      this.start();
      this.route.navigate(['/rooms']);
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
  countTotal(){
    let totalPrice = 0;
    for(let item of this.cartiteams){
      totalPrice= totalPrice+ (item.count*item.price);
    }
    this.price = totalPrice;
    //console.log(this.price);
  }

}
