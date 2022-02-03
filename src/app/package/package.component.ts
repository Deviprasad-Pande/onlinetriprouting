import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.css']
})
export class PackageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
fun1()
{
  alert("Your Goa Package Booked successfully..!!");
}

fun2()
{
  alert("Your Maldives Package Booked successfully..!!");
}
fun3()
{
  alert("Your Manali Package Booked successfully..!!");
}

}
