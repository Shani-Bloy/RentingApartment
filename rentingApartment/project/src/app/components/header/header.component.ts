import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentorService } from 'src/app/services/rentor.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public rentorService:RentorService,  private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
      this.rentorService.logOut();
      this.router.navigate(['']);
  }
}
