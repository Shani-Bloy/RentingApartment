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
  constructor(private http: HttpClient) {}

  addRentor(rentor: rentor) {
    return this.http.post<rentor>(`${this.rentorUrl}/PostRentor`, rentor);
  }

  login(userName: string, password: string) {
    return this.http.post(`${this.rentorUrl}login`, {
      userName,
      password,
    } as user);
  }
}
