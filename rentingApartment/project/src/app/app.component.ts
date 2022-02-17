import { Component, OnInit } from '@angular/core';
import { RentorService } from './services/rentor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'project';
  constructor(private rentorService: RentorService){}
  ngOnInit() {
    this.rentorService.loadUserToken();
}
}
