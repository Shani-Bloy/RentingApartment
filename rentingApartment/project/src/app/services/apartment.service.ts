import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { apartment } from '../models/apartment';
import { apartmentDetails } from '../models/apartmentDetails';
import { Observable } from 'rxjs';
import {formatDate} from '@angular/common';
import { map } from 'rxjs/operators';
import { searchApartment } from '../models/searchApartment';
import { email } from '../models/email';

@Injectable({
  providedIn: 'root'
})

export class ApartmentService {

  ApartmentUrl = 'https://localhost:44312/api/apartment/';
  path:any;
  constructor(private http: HttpClient) { }

  getApartments(){
    return this.http.get(`${this.ApartmentUrl}/GetApartments`);
  }

    getApartmentsForSearch(search:searchApartment){
    const httpOptions = 
          {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };
          //  const params = new HttpParams()
          // .set('city', city)
          // .set('numChildren', numChildren.toString())
          // .set('startDate',startDate.toString())
          // .set('endDate',endDate.toString())
        debugger;
          let bodyParams = JSON.stringify({'searchAppeartment':search});
          return this.http.post(this.ApartmentUrl + 'SearchApartments',{bodyParams},httpOptions)
         .pipe(
          map(serverData => {debugger;
            return serverData;
          }));
    
  }

  addApartment(apartment: apartment,apartmentDetails:apartmentDetails) {
    return this.http.post<apartment>(`${this.ApartmentUrl}/PostApartment`,{apartment,apartmentDetails});
  }

  getApartmentDetails(id:number) {
    return this.http.get(`${this.ApartmentUrl}/GetApartmentDetails/${id}`);
  }

  getApartment(id:number) {
    return this.http.get(`${this.ApartmentUrl}/GetApartment/${id}`);
  }

  getRentorApartments(id:number){
    return this.http.get(`${this.ApartmentUrl}/GetRentorApartment/${id}`)
  }

  updateApartment(apartment: apartment) {
    return this.http.put(`${this.ApartmentUrl}/updateApartment`, apartment)
  }

  uploadImage (image: File): Observable<Object>
  {
     let formData = new FormData();
     this.path=formData.append('image', image);
     return this.http.post(`${this.ApartmentUrl}/addImage`,formData);
  }

  deleteApartment(apartment: apartment ){
  const id =  apartment.ApartmentId;
    return this.http.delete<apartment>(`${this.ApartmentUrl}/deleteApartment/${id}`)
  }

  sendEmail(Email:email){
console.log(Email.rentorId);
    const httpOptions = 
          {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
          };
           const params = new HttpParams()
           
          .set('rentorId', Email.rentorId.toString())        
          .set('senderName',Email.senderName)
          .set('senderPhone',Email.senderPhone.toString())
          .set('senderEmail', Email.senderEmail)
          .set('remarks',Email.remarks)
          //let bodyParams = JSON.stringify({params});
          return this.http.get('https://localhost:44312/api/email/SendEmail',{params:params})
         .pipe(
          map(serverData => {debugger;
            return serverData;
          }));

    //return this.http.get(`https://localhost:44312/api/email/sendEmail/${rentorId}`);
  }

  
}
