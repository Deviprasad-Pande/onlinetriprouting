import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {
message:any;
customerRegistrationForm:any;

  constructor(private customerService:CustomerService,private router:Router) 
  { }

  ngOnInit(): void {

    this.customerRegistrationForm=new FormGroup({

      customerName:new FormControl("",[Validators.required,Validators.maxLength(12)]),
      adddress:new FormControl("",[Validators.required,Validators.minLength(3)]),
      email:new FormControl("",[Validators.required,Validators.email]),
      mobileNo:new FormControl("",[Validators.required,Validators.min(10)]),
      password:new FormControl("",[Validators.required,Validators.min(8)])
    });
  }
  registerCustomer(){

    if(this.customerRegistrationForm.valid){
   
      

    let obs=this.customerService.customerRegistration(this.customerRegistrationForm.value);
    
    obs.subscribe((resp:any)=>{ 
     
    alert("Customer is Registerd with "+resp.customerId);
    this.router.navigate(["listCustomer",sessionStorage.getItem("role")]);  
    },err=>{
       this.customerRegistrationForm.setErrors({
         serverGivenMsg:err.error.message
       });
        
    });
    
  }else{
  
    this.message="Please Enter Valid Details";
   
  
  }
  
  }


}
