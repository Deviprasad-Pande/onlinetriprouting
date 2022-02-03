import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  

  private url:string="http://localhost:7000";
  constructor(private http:HttpClient) { }

  validateCustomer(Credentials:any){

    return this.http.post(this.url+"/loginCustomer",Credentials)
   }

    // customerNameValidator(): import("@angular/forms").AsyncValidatorFn | import("@angular/forms").AsyncValidatorFn[] | null | undefined {
    // throw new Error('Method not implemented.');}
   
   isCustomerNameAvailable(customerName:any){
    return this.http.get(this.url+"/getCustomerById/"+customerName);
  

  }

  registerCustomer(customer:any){
    return this.http.post(this.url+"/registerCustomer",customer);
   }  

customernameValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return this.isCustomerNameAvailable(control.value).pipe(
      map(res => {
        // if res is true, username exists, return true
        return res ? { customernameExists: true } : null;
        // Return null if there is no error
      })
    );
  };
}

validateMerchant(Credentials:any){

  return this.http.post(this.url+"/loginMerchant",Credentials)
 }

  // customerNameValidator(): import("@angular/forms").AsyncValidatorFn | import("@angular/forms").AsyncValidatorFn[] | null | undefined {
  // throw new Error('Method not implemented.');}
 
 isMerchantNameAvailable(MerchantName:any){
  return this.http.get(this.url+"/getMerchantById/"+MerchantName);


}

registerMerchant(Merchant:any){
  return this.http.post(this.url+"/registerMerchant",Merchant);
 }  

 MerchantnameValidator(): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return this.isMerchantNameAvailable(control.value).pipe(
      map(res => {
        // if res is true, username exists, return true
        return res ? { MerchantnameExists: true } : null;
        // Return null if there is no error
      })
    );
  };
}




}
