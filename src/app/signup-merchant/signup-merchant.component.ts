import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signup-merchant',
  templateUrl: './signup-merchant.component.html',
  styleUrls: ['./signup-merchant.component.css']
})
export class SignupMerchantComponent implements OnInit {

  msg:any;
  merchantRegistrationForm:any;
  merchant:any;

  constructor(private loginService:LoginService,private router:Router) 

  {
    this.merchantRegistrationForm=new FormGroup({

      merchantName:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      repassword:new FormControl("",Validators.required),
      mobileNo:new FormControl("",Validators.required),
      address:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required)
  });
   
  }




  ngOnInit(): void {
  }


  register()
  {
    console.log(this.merchantRegistrationForm)
    if(this.merchantRegistrationForm.valid){

       this.loginService.registerMerchant(this.merchantRegistrationForm.value)

       .subscribe( resp =>{
         
        this.merchant=resp;
        alert(this.merchant.merchantName+" Registerd Sucessfully");
        this.router.navigate(["/login"]);

     }, err=>{
       this.msg=err.error.message;
       
     });
  }
  else
    this.msg="Invalid Form Input";
  

  }
}
  



