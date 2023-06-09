import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from "./components/home/home.component";
import {RegistrationComponent} from "./components/registration/registration.component";
import {RoomComponent} from "./components/room/room.component";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
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
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatListModule} from "@angular/material/list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {MatDialogModule} from "@angular/material/dialog";
import { RegistrationPageComponent } from './components/registration-page/registration-page.component';
import {MatTabsModule} from "@angular/material/tabs";
import { FooterComponent } from './shared/footer/footer/footer.component';
import {MatMenuModule} from "@angular/material/menu";
import { RoomDetailsComponent } from './components/room-details/room-details.component';
import { ErrorComponent } from './components/error/error.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {NetworkInterceptor} from "./services/network.interceptor";
import { AllOrdersComponent } from './components/all-orders/all-orders.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import { AddPromoCodeComponent } from './components/add-promo-code/add-promo-code.component';
import { AddDiscountComponent } from './components/add-discount/add-discount.component';

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
    RegistrationPageComponent,
    FooterComponent,
    RoomDetailsComponent,
    ErrorComponent,
    AllOrdersComponent,
    AllUsersComponent,
    AddPromoCodeComponent,
    AddDiscountComponent,
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
    MatButtonModule,
    MatDatepickerModule,
    MatProgressSpinnerModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatTabsModule,
    MatMenuModule,
    MatProgressBarModule
  ],
  providers: [
    {
      provide: AUTH_API_URL,
      useValue:enviroment.authApi,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: NetworkInterceptor,
      multi: true,
    },
  ],
  bootstrap:[AppComponent],
})
export class AppModule { }
