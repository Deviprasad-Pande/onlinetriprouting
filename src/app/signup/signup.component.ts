import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
msg:any;
customerRegistrationForm:any;
customer:any;


  constructor(private loginService:LoginService,private router:Router)
  
  {
    this.customerRegistrationForm=new FormGroup({

      customerName:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required),
      repassword:new FormControl("",Validators.required),
      mobileNo:new FormControl("",Validators.required),
      adddress:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required)
  });
   }

  ngOnInit(): void {
  }


  register()
  {
    if(this.customerRegistrationForm.valid){

       this.loginService.registerCustomer(this.customerRegistrationForm.value)

       .subscribe( resp =>{
         
        this.customer=resp;
        alert(this.customer.customerName+" Registerd Sucessfully");
        this.router.navigate(["/login"]);

     }, err=>{
       this.msg=err.error.message;
       
     });
  }
  else
    this.msg="Invalid Form Input";
  

    }

  }

