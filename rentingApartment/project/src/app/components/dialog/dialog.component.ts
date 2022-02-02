import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
 
    constructor(public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: number,private router: Router ) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  ok():void{
    this.router.navigate(['/rentor']);
  }
}
