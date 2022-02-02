import { Component, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/services/apartment.service';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EmailComponent } from '../email/email.component';
import { email } from 'src/app/models/email';

@Component({
  selector: 'app-apartment-details',
  templateUrl: './apartment-details.component.html',
  styleUrls: ['./apartment-details.component.scss']
})
export class ApartmentDetailsComponent implements OnInit {

  constructor(private apartmentService: ApartmentService,public dialog: MatDialog,private activatedRoute: ActivatedRoute) { }

  ApartmentD: any;
  Email:email;
  Apartment: any;

  ngOnInit(): void {
    this.activatedRoute.url.subscribe(url => {
      this.getApartmentDetails();
    })
  }

  getApartmentDetails() {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.apartmentService.getApartmentDetails(id).
    subscribe((apartmentDetails) => {this.ApartmentD = apartmentDetails, this.getApartment()});
  }

  getApartment() {
    this.apartmentService.getApartment(this.ApartmentD.IdApartment).
    subscribe((apartment) => this.Apartment = apartment);
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(EmailComponent, {
      width: '300px',
      data: {rentorId:this.Apartment.RentorId},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      

    });

  
  }

}
