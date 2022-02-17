import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rentor } from '../models/rentor';
import { user } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  
  providedIn: 'root',
})
export class RentorService {
  rentorUrl = `${environment.loacalUrl}/rentor/`;
  rentorLogin: rentor;
  NewRentor: rentor;
  public currentUserToken: string
  constructor(private http: HttpClient) {}

  loadUserToken(){
    this.currentUserToken=localStorage.getItem('currentUserToken')
    console.log( 'currentUserToken is :',this.currentUserToken);
  }
  addRentor(rentor: rentor) {
    return this.http.post<rentor>(`${this.rentorUrl}/PostRentor`, rentor);
  }

  login(userName: string, password: string) {
    //this.currentUserToken='23445';
    return this.http.post(`${this.rentorUrl}login`, {
      userName,
      password,
    } as user)
  }
  logOut(){
    localStorage.removeItem('currentUserToken');
    this.currentUserToken=null;
  }
}
