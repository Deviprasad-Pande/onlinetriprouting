import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})
export class MerchantComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  fun1()
  {
    alert("This Merchant is successfully Deleted");
  }

  fun2()
  {
    alert("This Merchant is successfully Updated");
  }
}
