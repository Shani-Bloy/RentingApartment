import { Injectable } from '@angular/core';
import { date } from '../models/date';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DateService {

  dateUrl = `${environment.loacalUrl}/date/`;

  constructor(private http: HttpClient) { }

  addDate(date: date) {
    console.log(date.ApartmentId);  console.log(date.endDate);  console.log(date.startDate);
    
    return this.http.post<date>(`${this.dateUrl}/addDate`, date);
  }
}
