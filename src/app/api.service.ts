import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private api:HttpClient) { }
  getDetailes(){
    return this.api.get('https://dummyjson.com/users')
  }
}
