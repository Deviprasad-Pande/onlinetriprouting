import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
fun1()
{
  alert("This Customer is successfully Deleted");
}

fun2()
  {
    alert("This Cusomer is successfully Updated")
  }

}
