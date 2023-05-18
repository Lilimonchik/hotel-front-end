import {Component, OnInit} from "@angular/core";
import {RoomsstoreService} from "../../services/roomsstore.service";
import {Cartiteams} from "../../interfaces/cartiteams";
import {CountService} from "../../services/count.service";

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styleUrls: ['cart.component.css']
})

export class CartComponent implements OnInit{
  constructor(private cart: RoomsstoreService) {
  }

  public cartiteams: Cartiteams[]=[];

  public price = 0;

  ngOnInit() {
    this.cart.getCartIteam().subscribe(res =>{
      this.cartiteams = res;
      this.price = 0;
    });
    this.countTotal()
  }

  countTotal(){
      let totalPrice = 0;
      for(let item of this.cartiteams){
        totalPrice+=item.count*item.price;
      }
      this.price = totalPrice;
  }
}
