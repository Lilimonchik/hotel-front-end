import { Component } from '@angular/core';
import {Order} from "../../interfaces/order";
import {RoomsstoreService} from "../../services/roomsstore.service";

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.scss']
})
export class AllOrdersComponent {

  constructor(private order: RoomsstoreService) {
  }

  public orders: Order[]=[];

  public price: number = 0;

  ngOnInit(){
    this.order.getOrders().subscribe(res=>{
      this.orders = res
    })
  }
}
