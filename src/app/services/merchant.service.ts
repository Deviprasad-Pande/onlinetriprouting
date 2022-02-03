import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  

  baseURL = "http://localhost:7000";
  

  constructor(private http:HttpClient) { }
authenticateMerchant(credentials:any)
{
console.log("inside auth merchant");

  return this.http.post(this.baseURL+"/loginMerchant",credentials)
}

merchantRegistration(merchantData:any){
  return this.http.post(this.baseURL+"/registerMerchant",merchantData);
}


updateMerchant(merchantData:any){
  return this.http.put(this.baseURL+"/updateMerchant",merchantData);
}

deleteMerchant(merchantId:any){
  return this.http.delete(this.baseURL+"/deleteMerchant/"+merchantId,{responseType:'text'});
}

}

