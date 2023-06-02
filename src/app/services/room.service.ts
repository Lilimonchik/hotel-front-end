import {HttpClient} from "@angular/common/http";
import {AUTH_API_URL} from "../app.injection-tokens";
import {Inject, inject, Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Rooms} from "../interfaces/rooms";
import {Newroom} from "../interfaces/newroom";

@Injectable({
  providedIn: "root",
})

export class RoomService{
  constructor(private http: HttpClient, @Inject(AUTH_API_URL) private apiUrl: string) {
  }
  getRoom(): Observable<Rooms[]>{
    return this.http.get<Rooms[]>(`${this.apiUrl}RoomAction/ShowRoom`);
  }
  addtocart(RoomId: string, count: number){
    return this.http.post(`${this.apiUrl}CartIteamAction/AddCartIteam`,{
      RoomId,count
    });
  }
  addnewroom(newRoom: FormData){
      return this.http.post(`${this.apiUrl}RoomAction/AddRoom`,newRoom);
  }
}
