import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseURL = "http://localhost:7000";
  

  constructor(private http:HttpClient) { }
authenticateCustomer(credentials:any)
{

  return this.http.post(this.baseURL+"/loginCustomer",credentials)
}
customerRegistration(customerData:any){
  return this.http.post(this.baseURL+"/registerCustomer",customerData);
}

updateCustomer(customerData:any){
  return this.http.put(this.baseURL+"/updateCustomer",customerData);
}

deleteCustomerById(customerId:any){
  return this.http.delete(this.baseURL+"/deleteCustomerById/"+customerId,{responseType:'text'});
}


}
