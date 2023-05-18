import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {RoomComponent} from "./components/room/room.component";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UserCabinetComponent} from "./components/user-cabinet/user-cabinet.component";
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import {AUTH_API_URL} from "./app.injection-tokens";
import {enviroment} from "../environments/enviroment";
import {JwtModule} from "@auth0/angular-jwt";
import {ACCESS_TOKEN_KEY} from "./services/auth.service";
import {OrdersComponent} from "./components/orders/orders.component";
import {CartComponent} from "./components/cart/cart.component";
import {InfoAboutUserComponent} from "./components/info-about-user/info-about-user.component";
import {AddNewRoomComponent} from "./components/add-new-room/add-new-room.component";
import {CreateOrderComponent} from "./components/create-order/create-order.component";
import {SingInComponent} from "./components/sing-in/sing-in.component";

export function tokenGetter(){
  return localStorage.getItem(ACCESS_TOKEN_KEY);
}
@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    HomeComponent,
    RegistrationComponent,
    RoomComponent,
    UserCabinetComponent,
    MainLayoutComponent,
    OrdersComponent,
    CartComponent,
    InfoAboutUserComponent,
    AddNewRoomComponent,
    CreateOrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        allowedDomains: enviroment.tokenWhiteListedDomains
      }
    })
  ],
  providers: [
    {
      provide: AUTH_API_URL,
      useValue:enviroment.authApi
    }
  ],
  bootstrap:[AppComponent],
})
export class AppModule { }
