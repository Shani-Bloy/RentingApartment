import { Component, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/services/apartment.service';
import { RentorService } from 'src/app/services/rentor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  activatedRoute: any;

  constructor(private apartmentService: ApartmentService, private rentorService: RentorService,) { }

  apartments: any;
  Apartment:any;

   ngOnInit() {
     this.getAllApartments();
  }

  getAllApartments(){
    this.apartmentService.getApartments()
    .subscribe((apartments: any) => this.apartments = apartments);
  }

  sendEmail(rentorId:number){
    // this.apartmentService.sendEmail(rentorId)
    // .subscribe((res: any) => console.log(res));
  }

  

  //   getApartmentDetails(id:number) {   
  //   this.apartmentService.getApartmentDetails(id).
  //   subscribe((apartmentDetails) => this.Apartment = apartmentDetails);
  // }
  
  // getApartmentImg(){
  //   for(var i=0; i>this.apartments; i++){
  //     this.getApartmentDetails(this.apartments[i].ApartmentId)
  //     console.log(this.apartments[i].ApartmentId);
      
  //   }
  // }
}
