import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { email } from '../../models/email';
import { ApartmentService } from 'src/app/services/apartment.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  constructor( public dialogRef: MatDialogRef<EmailComponent>,
    private apartmentService:ApartmentService,
    @Inject(MAT_DIALOG_DATA) public data: email,) { }

  ngOnInit(): void {
  }

  onNoClick(): void {
      this.dialogRef.close();
    }

  Ok( rentorId:number,senderName:string,senderPhone:number,senderEmail:string,remarks:string){  
    this.apartmentService.sendEmail(
      {rentorId,senderName,senderPhone,senderEmail,remarks } as email)    
    .subscribe(()=>console.log(  {rentorId,senderName,senderPhone,senderEmail,remarks } as email) )
  }
 
}

// @Component({
//   selector: 'dialog-overview-example-dialog',
//   templateUrl: 'dialog-overview-example-dialog.html',
// })
// export class DialogOverviewExampleDialog {
//   constructor(
//     public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
//     @Inject(MAT_DIALOG_DATA) public data: DialogData,
//   ) {}

//   onNoClick(): void {
//     this.dialogRef.close();
//   }
// }

