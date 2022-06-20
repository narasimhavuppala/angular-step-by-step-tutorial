import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseurl= "https://jsonplaceholder.typicode.com/users";

  constructor( private httpclient: HttpClient) { }

  getUserDetails(userid: string){
    const url = this.baseurl+"/"+ userid;
    return  this.httpclient.get(url);
  }
}
