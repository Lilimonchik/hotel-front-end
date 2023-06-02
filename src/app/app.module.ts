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
import { HeaderComponent } from './shared/main-layout/header.component';
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
import {AngularMaterialModuleModule} from "./angular-material-module/angular-material-module.module";
import {MatInputModule} from "@angular/material/input";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";

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
    HeaderComponent,
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
        AngularMaterialModuleModule,
        JwtModule.forRoot({
            config: {
                tokenGetter,
                allowedDomains: enviroment.tokenWhiteListedDomains
            }
        }),
        MatInputModule,
        BrowserAnimationsModule,
        MatButtonModule
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
