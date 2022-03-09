import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApartmentService } from '../../services/apartment.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateComponent } from '../date/date.component';
import { date } from '../../models/date';
import { Location } from '@angular/common';
import { apartment } from 'src/app/models/apartment';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-apartment',
  templateUrl: './apartment.component.html',
  styleUrls: ['./apartment.component.scss']
})
export class ApartmentComponent implements OnInit {

  animal: string;
  name: string;
  dateS:date;
  dateE:date;
  result:string;
  // Apartments: any;
  @Input() apartment: any;
  constructor(private apartmentService: ApartmentService,public dialog: MatDialog, private location: Location,) { }


  openDialog(): void {
    const dialogRef = this.dialog.open(DateComponent, {
      width: '300px',
      data: {ApartmentId: this.apartment.ApartmentId,startDate:this.dateS,endDate:this.dateE},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      

    });
  }

  // goBack(): void {
  //   this.location.back();
  // }

  delete(): void {
    const dialogRef = this.dialog.open(DialogElements, {
      width: '500px',
      data: {apartment:this.apartment },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.result = result;
      console.log(this.result);
    });
    // if(this.)
  }

    // this.dialog.open(DialogElements);
   // this.apartmentService.deleteApartment(this.apartment).subscribe(() => this.goBack());

  //  delete(): void {
  //   alert('are you sure you want to delete this apartment?');
  //     this.apartmentService.deleteApartment(this.apartment).subscribe(() => this.goBack());
  //  }
  //  goBack(): void {
  //   this.location.back();
  // }

  ngOnInit() {
    // this.GetApartments();
  }

  // GetApartments() {
  //   this.apartmentService.getApartments()
  //     .subscribe((apartments: any) => this.Apartments = apartments);
  // }


}
@Component({
  selector: 'dialog-elements',
  templateUrl: './dialog-elements.html',
})
export class DialogElements implements OnInit {

  constructor(private location: Location,private apartmentService:ApartmentService,
    public dialogRef: MatDialogRef<DialogElements>,
    @Inject(MAT_DIALOG_DATA) public data:any, ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  Ok(){  
    
    console.log(this.data);
    console.log(this.data.apartment.ApartmentId);
console.log(typeof(this.data) );
    this.apartmentService.deleteApartment(this.data.apartment).subscribe(() => this.goBack());
    //.subscribe(() => this.goBack());

this.dialogRef.close();
    
  }
  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
//export class DialogElements {}
