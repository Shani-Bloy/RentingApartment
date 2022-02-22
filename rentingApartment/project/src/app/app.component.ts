import { Component, OnInit } from '@angular/core';
import { RentorService } from './services/rentor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project';
  lat = 22.2736308;
  lng = 70.7512555;
  show:boolean=false;
  constructor(private rentorService: RentorService){}
  ngOnInit() {
   // debugger;
    this.rentorService.loadUserToken();
    this.show=true;
}
}
