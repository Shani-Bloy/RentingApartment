import { Component, OnInit, Input } from '@angular/core';
import { RentorService } from 'src/app/services/rentor.service';
import { rentor } from 'src/app/models/rentor';

@Component({
  selector: 'app-rentor',
  templateUrl: './rentor.component.html',
  styleUrls: ['./rentor.component.scss']
})
export class RentorComponent implements OnInit {

  showAdd: boolean = true;
  rentorData:rentor;
  newRentor:rentor;
  constructor(private rentorService: RentorService,) { }

  ngOnInit(): void {
    //console.log(this.rentorService.rentorLogin);
    this.rentorData=this.rentorService.rentorLogin;
    this.newRentor=this.rentorService.NewRentor;
    console.log(this.rentorService.NewRentor);
    
  }

  add() {
    this.showAdd = false;
  }
}
