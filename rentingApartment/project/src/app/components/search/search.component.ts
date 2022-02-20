import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ApartmentService } from 'src/app/services/apartment.service';
import { date } from '../../models/date';
import { SearchAppeartment } from 'src/app/models/searchApartment';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  
  constructor(private apartmentService: ApartmentService, fb: FormBuilder) {     
    this.toppings = fb.group({
      Pool: false,
      DisableAccess: false,
      Porch: false,
      Elevator: false,
      Parking: false,
      ImmediatelyRenting : false,
      NumberOfAirConditioners:0,
      NumberOfRooms:0,
      minPrice:null,
      maxPrice:null,
    });  
  }

  public toppings: FormGroup;
  myControl = new FormControl();
  options: string[] = ['Bnei Brak', 'Yerushalaim', 'Tel Aviv','Petach Tikva','Ramat Gan','Afula'];
  filteredOptions: Observable<string[]>;
  Apartments:any;
  IsAdvancedSearch:boolean=false;


  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  advancedSearch()
  {
    this.IsAdvancedSearch=!this.IsAdvancedSearch;

  }
  search(City:string,NumChildren:number,StartDate:Date,EndDate:Date){  
    debugger;  
    let searchAppeartment:SearchAppeartment=new SearchAppeartment();
   
    searchAppeartment.City=City;
    searchAppeartment.NumChildren=NumChildren;
    searchAppeartment.StartDate=StartDate;
    searchAppeartment.EndDate=EndDate;debugger;
    searchAppeartment.DisableAccess=this.toppings.controls["DisableAccess"].value;
    searchAppeartment.Elevator=this.toppings.controls["Elevator"].value;
    searchAppeartment.Pool=this.toppings.controls["Pool"].value;
    searchAppeartment.Parking=this.toppings.controls["Parking"].value;
    searchAppeartment.Porch=this.toppings.controls["Porch"].value;
    searchAppeartment.ImmediatelyRenting=this.toppings.controls["ImmediatelyRenting"].value;
    searchAppeartment.NumberOfAirConditioners=this.toppings.controls["NumberOfAirConditioners"].value;
    searchAppeartment.NumberOfRooms=this.toppings.controls["NumberOfRooms"].value;
    searchAppeartment.minPrice=this.toppings.controls["minPrice"].value;
    searchAppeartment.maxPrice=this.toppings.controls["maxPrice"].value;


    this.apartmentService.getApartmentsForSearch(searchAppeartment)
                         .subscribe((apartments: any) => this.Apartments = apartments);
  }

}
