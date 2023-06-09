import {Rooms} from "../interfaces/rooms";
import {Inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AUTH_API_URL} from "../app.injection-tokens";
import {Observable} from "rxjs";
import {Order} from "../interfaces/order";
import {User} from "../interfaces/user";
import {ACCESS_TOKEN_KEY} from "./auth.service";
import {CartItem} from "../interfaces/cartItem";
import {UserDTO} from "../DTO/UserDTO";
@Injectable({
  providedIn: 'root',
})
export class RoomsstoreService{

  private baseUrl = `${this.apiUrl}`
  constructor(private http: HttpClient, @Inject(AUTH_API_URL) private apiUrl: string) {
  }
  getCatalog(): Observable<Rooms[]>{
    return this.http.get<Rooms[]>(`${this.apiUrl}RoomAction/ShowRoom`);
  }

  getOrders():Observable<Order[]>{
    return this.http.get<Order[]>(`${this.apiUrl}OrderAction/ShowUserOrder`);
  }

  getInfoAboutUser():Observable<User>{
    return this.http.get<User>(`${this.apiUrl}LoginAction/GetInfoAboutUser`);
  }

  getCartIteam():Observable<CartItem[]> {
    return this.http.get<CartItem[]>(`${this.apiUrl}CartIteamAction/ShowUserCartIteam`);
  }

  createOrder(promocode: string){
    return this.http.post(`${this.apiUrl}OrderAction/CreatenewOrder`,{
      promocode
    });
  }

  getAllOrders(): Observable<Order[]>{
    return this.http.get<Order[]>(`${this.apiUrl}OrderAction/ShowAllOrder`)
  }
  getAllUsers(): Observable<UserDTO[]>{
    return this.http.get<UserDTO[]>(`${this.apiUrl}RegistrationAction/ShowUser`);
  }
}
