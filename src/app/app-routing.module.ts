import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateOrderComponent} from "./components/create-order/create-order.component";
import {SingInComponent} from "./components/sing-in/sing-in.component";
import {AddNewRoomComponent} from "./components/add-new-room/add-new-room.component";
import {UserCabinetComponent} from "./components/user-cabinet/user-cabinet.component";
import {RoomComponent} from "./components/room/room.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {HomeComponent} from "./components/home/home.component";
import {CartComponent} from "./components/cart/cart.component";
import {OrdersComponent} from "./components/orders/orders.component";
import {InfoAboutUserComponent} from "./components/info-about-user/info-about-user.component";
import {RegistrationPageComponent} from "./components/registration-page/registration-page.component";
import {RoomDetailsComponent} from "./components/room-details/room-details.component";
import {AllOrdersComponent} from "./components/all-orders/all-orders.component";
import {AllUsersComponent} from "./components/all-users/all-users.component";
import {AddPromoCodeComponent} from "./components/add-promo-code/add-promo-code.component";
import {AddDiscountComponent} from "./components/add-discount/add-discount.component";

const routes: Routes =[
  {path:'', component:HomeComponent, title: 'home'},
  {path:'registration',component:RegistrationComponent, title: 'registration'},
  {path:'sing-in',component:SingInComponent, title: 'sing-in'},
  {path:'rooms',component: RoomComponent, title: 'Rooms'},
  {path: 'user-cabinet',component:UserCabinetComponent, title: 'Usercabinet'},
  {path: 'newroom',component: AddNewRoomComponent, title:'NewRoom'},
  {path: 'createOrder', component: CreateOrderComponent, title:'NewOrder'},
  {path: 'cart',component: CartComponent, title:'Cart'},
  {path: 'order', component: OrdersComponent, title:'Order'},
  {path: 'info-about-user',component: InfoAboutUserComponent, title: 'info-about-user'},
  {path: 'registration-page',component: RegistrationPageComponent, title: 'registration-page'},
  { path: 'rooms/:id', component: RoomDetailsComponent },
  {path: 'all-orders', component: AllOrdersComponent, title: 'all-orders'},
  {path: 'all-users', component: AllUsersComponent, title: 'All-users'},
  {path: 'add-promo-code', component: AddPromoCodeComponent, title:'Add Promo-code'},
  {path: 'add-discount', component: AddDiscountComponent, title: 'Add Discount'},


  {path: "**", redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
