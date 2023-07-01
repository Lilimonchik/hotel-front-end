import {Component, OnInit} from "@angular/core";
import {RoomsstoreService} from "../../services/roomsstore.service";
import {Order} from "../../interfaces/order";
import {LoadingService} from "../../services/loading.service";

@Component({
  selector: "app-order",
  templateUrl: 'orders.component.html',
  styleUrls: ['orders.component.css']
})
export class OrdersComponent implements OnInit{

  loading$ = this.loading.loading$;
    constructor(private order: RoomsstoreService, private loading: LoadingService) {
    }
    public orders: Order[]=[];
    public price: number = 0;
    ngOnInit(){
      this.order.getOrders().subscribe(res=>{
        this.orders = res
      })
    }
}
