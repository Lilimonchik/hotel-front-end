import {Component, OnInit} from "@angular/core";
import {RoomsstoreService} from "../../services/roomsstore.service";
import {Order} from "../../interfaces/order";

@Component({
  selector: "app-order",
  templateUrl: 'orders.component.html',
  styleUrls: ['orders.component.css']
})
export class OrdersComponent implements OnInit{
    constructor(private order: RoomsstoreService) {
    }

    public orders: Order[]=[];

    ngOnInit(){
      this.order.getOrders().subscribe(res=>{
        this.orders = res
      })
    }
}
