import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AUTH_API_URL} from "../app.injection-tokens";

@Injectable({
  providedIn:'root'
})
export class CountService{
  constructor(private http: HttpClient, @Inject(AUTH_API_URL) private apiUrl: string) {
  }

  public totalPrice = 0;
  countTotalPrice(total: number){
    this.totalPrice += total;
  }
}
