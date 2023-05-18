import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateOrderComponent} from "./components/create-order/create-order.component";
import {SingInComponent} from "./components/sing-in/sing-in.component";
import {AddNewRoomComponent} from "./components/add-new-room/add-new-room.component";
import {UserCabinetComponent} from "./components/user-cabinet/user-cabinet.component";
import {RoomComponent} from "./components/room/room.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {HomeComponent} from "./components/home/home.component";

const routes: Routes =[
  {path:'', component:HomeComponent, title: 'home'},
  {path:'registration',component:RegistrationComponent, title: 'registration'},
  {path:'sing-in',component:SingInComponent, title: 'sing-in'},
  {path:'rooms',component: RoomComponent, title: 'Rooms'},
  {path: 'user-cabinet',component:UserCabinetComponent, title: 'Usercabinet'},
  {path: 'newroom',component: AddNewRoomComponent, title:'NewRoom'},
  {path: 'createOrder', component: CreateOrderComponent, title:'NewOrder'},


  {path: "**", redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
