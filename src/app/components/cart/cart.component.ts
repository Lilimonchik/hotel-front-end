import {Component, OnInit} from "@angular/core";
import {RoomsstoreService} from "../../services/roomsstore.service";
import {CartItem} from "../../interfaces/cartItem";
import {CountService} from "../../services/count.service";
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})

export class CartComponent implements OnInit{

  loading$ = this.loading.loading$;
  constructor(private cart: RoomsstoreService, private loading: LoadingService) {
  }

  public cartItems: CartItem[]=[];

  public price = 0;

  ngOnInit() {
    this.cart.getCartIteam().subscribe(res =>{
      this.cartItems = res;
      this.countTotal();
    });

  }

  countTotal(){
      let totalPrice = 0;
      for(let item of this.cartItems){
        totalPrice= totalPrice+ (item.count*item.price);
      }
      this.price = totalPrice;
      //console.log(this.price);
  }
}
