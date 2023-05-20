import {Component, Inject, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {AUTH_API_URL} from "../../app.injection-tokens";
import {RoomsstoreService} from "../../services/roomsstore.service";
import {CartItem} from "../../interfaces/cartItem";

//import {CartComponent} from "../componentforusercabinet/cart/product.cart";

@Component({
  styleUrls:['create-order.component.css'],
  templateUrl: './create-order.component.html'
})

export class CreateOrderComponent implements OnInit{
  constructor(private order: RoomsstoreService) {
  }
  //public ordertotalprice = this.room.totalPrice;

  public price = 0;

  public promocode = " ";

  public cartiteams: CartItem[] = [];
  ngOnInit() {
    this.order.getCartIteam().subscribe(res =>{
      this.cartiteams = res;
    })
    this.price = 0;
  }
  neworder(promocode: string){
    this.order.createOrder(promocode).subscribe(res=>{
      alert("Successful!");
    })
  }
  countTotal(total:number){
    this.price+=total;
  }

}
