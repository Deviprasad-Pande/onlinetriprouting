import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MerchantService } from '../services/merchant.service';

@Component({
  selector: 'app-register-merchant',
  templateUrl: './register-merchant.component.html',
  styleUrls: ['./register-merchant.component.css']
})
export class RegisterMerchantComponent implements OnInit {

  message:any;
merchantRegistrationForm:any;


  constructor(private merchantService:MerchantService,private router:Router) { }

  ngOnInit(): void {
    this.merchantRegistrationForm=new FormGroup({

      customerName:new FormControl("",[Validators.required,Validators.maxLength(12)]),
      adddress:new FormControl("",[Validators.required,Validators.minLength(3)]),
      email:new FormControl("",[Validators.required,Validators.email]),
      mobileNo:new FormControl("",[Validators.required,Validators.min(10)]),
      password:new FormControl("",[Validators.required,Validators.min(8)])
    });

  }


  registerMerchant(){

    if(this.merchantRegistrationForm.valid){
   
      

    let obs=this.merchantService.merchantRegistration(this.merchantRegistrationForm.value);
    
    obs.subscribe((resp:any)=>{ 
     
    alert("Merchant is Registerd with "+resp.merchantId);
    this.router.navigate(["listMerchant",sessionStorage.getItem("role")]);  
    },err=>{
       this.merchantRegistrationForm.setErrors({
         serverGivenMsg:err.error.message
       });
        
    });
    
  }else{
  
    this.message="Please Enter Valid Details";
   
  
  }
  
  }

}
