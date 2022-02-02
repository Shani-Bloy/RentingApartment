import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApartmentComponent } from './components/apartment/apartment.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ApartmentDetailsComponent } from './components/apartment-details/apartment-details.component';
import { RentorComponent } from './components/rentor/rentor.component';
import { HeaderComponent } from './components/header/header.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AddApartmentComponent } from './components/add-apartment/add-apartment.component';
import { UpdateApartmentComponent } from './components/update-apartment/update-apartment.component';
import { ApartmentsComponent } from './components/apartments/apartments.component';
import { DateComponent } from './components/date/date.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { SearchComponent } from './components/search/search.component';
import { ApartmentForRentComponent } from './apartment-for-rent/apartment-for-rent.component';
import { EmailComponent } from './components/email/email.component';

const MATERIAL_MODULES = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule,
  MatDialogModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatCheckboxModule,
];

@NgModule({
  declarations: [
    AppComponent,
    ApartmentComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ApartmentDetailsComponent,
    RentorComponent,
    HeaderComponent,
    AddApartmentComponent,
    UpdateApartmentComponent,
    ApartmentsComponent,
    DateComponent,
    DialogComponent,
    SearchComponent,
    ApartmentForRentComponent,
    EmailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ...MATERIAL_MODULES,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
