import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { ApartmentService } from 'src/app/services/apartment.service';
import { date } from '../../models/date';
import { searchApartment } from 'src/app/models/searchApartment';
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
    });  
  }

  toppings: FormGroup;
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
  search(city:string,numChildren:number,startDate:Date,endDate:Date){    
      this.apartmentService.getApartmentsForSearch({city,numChildren,startDate,endDate} as searchApartment)
        .subscribe((apartments: any) => this.Apartments = apartments);
  }

}
