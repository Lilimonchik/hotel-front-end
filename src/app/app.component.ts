import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsService} from "./services/products.service";
import {SingalRService} from "./services/singal-r.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'Hotel';
  constructor(private signalRService: SingalRService) {
  }
  ngOnInit(): void {
  }
  ngOnDestroy() {

  }
}
