import {Inject, Injectable} from '@angular/core';
import * as signalIR from '@microsoft/signalr';
import {Observable, Subject} from "rxjs";
import {Rooms} from "../interfaces/rooms";
import {HubConnection, HubConnectionBuilder} from "@aspnet/signalr";
import * as signalR from '@microsoft/signalr';
import {HttpClient} from "@angular/common/http";
import {AUTH_API_URL} from "../app.injection-tokens";
//"https://localhost:7095/signalRTest"
@Injectable({
  providedIn: 'root'
})
export class SingalRService {

  private hubConnection: signalR.HubConnection;
  private roomFilterSubject: Subject<Rooms> = new Subject<Rooms>();

  roomFilter$ = this.roomFilterSubject.asObservable();

  constructor() { }

  startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://hetel-api.herokuapp.com/signalRTest')
      .build();

    this.hubConnection.start()
      .then(() => {
        console.log('SignalR connection started.');
        this.registerRoomFilterUpdate();
      })
      .catch(err => console.error('Error starting SignalR connection:', err));
  }

  registerRoomFilterUpdate() {
    this.hubConnection.on('UpdateRoomFilter', (updatedRooms) => {
      setTimeout(() => {
        this.roomFilterSubject.next(updatedRooms);
      }, 1000);
    });
  }
}
