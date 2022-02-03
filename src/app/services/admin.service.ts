import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {


  baseURL = "http://localhost:7000";

  constructor(private http:HttpClient) { 

    
  }
}
