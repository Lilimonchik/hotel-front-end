import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Promocode} from "../../interfaces/promocode";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-promo-code',
  templateUrl: './add-promo-code.component.html',
  styleUrls: ['./add-promo-code.component.scss']
})
export class AddPromoCodeComponent implements OnInit{

  constructor(private auth: AuthService) {
  }
  public promocodes: Promocode[] = [];

  promocode: FormGroup;
  ngOnInit() {
    this.promocode = new FormGroup({
      namePromocode: new FormControl('',[Validators.required]),
      sum: new FormControl('',[Validators.required])
    })
    this.auth.showPromocode().subscribe(res =>{
      this.promocodes = res;
    })
  }
  submit(){
    this.auth.addPromocode(this.promocode.value).subscribe(res =>{
      console.log("Successful!");
    });
  }
}
