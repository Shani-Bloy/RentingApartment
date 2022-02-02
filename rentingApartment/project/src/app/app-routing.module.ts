import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RentorComponent } from './components/rentor/rentor.component';

import { AddApartmentComponent } from './components/add-apartment/add-apartment.component';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { UpdateApartmentComponent } from './components/update-apartment/update-apartment.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { SearchComponent } from './components/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'apartments', component: ApartmentsComponent },
  { path: 'rentor', component: RentorComponent },
  { path: 'addApartment', component: AddApartmentComponent },
  { path: 'Search', component: SearchComponent },
  { path: 'apartmentDetails/:id', component: ApartmentDetailsComponent },
  { path: 'updateApartment/:id', component: UpdateApartmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
