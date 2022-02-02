import { Component, Input, OnInit } from '@angular/core';
import { ApartmentService } from 'src/app/services/apartment.service';
import { apartment } from '../../models/apartment';
import { apartmentDetails } from '../../models/apartmentDetails';
import { rentor } from 'src/app/models/rentor';
import { RentorService } from 'src/app/services/rentor.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.scss'],
})
export class AddApartmentComponent implements OnInit {
  rentor: rentor;

  constructor(
    private apartmentService: ApartmentService,
    private rentorService: RentorService,
    public dialog: MatDialog
  ) {}
  options: string[] = [
    'Bnei Brak',
    'Yerushalaim',
    'Tel Aviv',
    'Petach Tikva',
    'Ramat Gan',
    'Afula',
  ];

  ngOnInit(): void {
    if (this.rentorService.rentorLogin)
      this.rentor = this.rentorService.rentorLogin;
    else this.rentor = this.rentorService.NewRentor;
  }

  addApartment(
    rentorId: number,
    city: string,
    street: string,
    floor: number,
    rooms: number,
    beds: number,
    airconditioners: number,
    ImageSrc: string,
  ) {
    console.log('add apatrtment work');
    this.apartmentService
      .addApartment({ rentorId,city,  street,  floor, rooms, beds, airconditioners,} as apartment,      
        {rentorId, ImageSrc} as apartmentDetails)
      
      .subscribe(() =>
        console.log({
          rentorId,
          city,
          street,
          floor,
          rooms,
          beds,
          airconditioners,
        } as apartment)
      );

     // this.rentorService.rentorLogin=this.rentorService.NewRentor;
     // this.rentorService.NewRentor = null;
      this.openDialog(); 
  }

  upload(ImageSrc) {
    console.log(ImageSrc.files[0].name);
    
    this.apartmentService.uploadImage(ImageSrc.files[0]).subscribe();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '550px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      
    });
  }
}
