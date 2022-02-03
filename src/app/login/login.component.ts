import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';
import { MerchantService } from '../services/merchant.service';
import { SignupComponent } from '../signup/signup.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // merchantService: any;


  constructor(private router:Router,private customerService:CustomerService,private merchantService:MerchantService) { }

  ngOnInit(): void {
  }

login(credentials:any){
console.log(credentials)
if(credentials.role ==='customer')
{
  this.customerService.authenticateCustomer(credentials).subscribe({ next: (resp:any)=>{

        sessionStorage.setItem("role","Customer");
        sessionStorage.setItem("loginName",resp.customerName);  
       
        this.router.navigate(["customer"]);

  },
  
  
 error: err=>{
        
    alert(err.error.message + ": "+ err.status);
  }
  
  });
}
else if(credentials.role ==='merchant')
{
// this.merchantService.fun1();


  this.merchantService.authenticateMerchant(credentials).subscribe({ next: (resp:any)=>{

         sessionStorage.setItem("role","Merchant");
         sessionStorage.setItem("loginName",resp.merchantName);  
       
        this.router.navigate(["merchant"]);

  },
  error: err=>{
        
    alert(err.error.message + ": "+ err.status);
  }
  
  
  });
}
else if(credentials.role ==='admin')
{
  if(credentials.username === 'Admin123@gmail.com' && credentials.password === 'Admin1234')
  {
    this.router.navigate(["admin"]);
  }
  else"Invalid Admin Details..!!"


}



}

}