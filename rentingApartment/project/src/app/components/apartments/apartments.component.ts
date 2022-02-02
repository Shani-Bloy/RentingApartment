import { Component, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/services/apartment.service';
import { RentorService } from 'src/app/services/rentor.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.scss']
})
export class ApartmentsComponent implements OnInit {

  apartments: any;
  rentor: any;
  constructor(private apartmentService: ApartmentService, private location: Location, private rentorService: RentorService,) { }

  ngOnInit(): void {
    this.rentor = this.rentorService.rentorLogin;
    this.updateApartment();
  }

  updateApartment() {
    this.apartmentService.getRentorApartments(this.rentor.IdRentor)
      .subscribe((apartments: any) => this.apartments = apartments);
  }

  goBack(): void {
    this.location.back();
  }
}
