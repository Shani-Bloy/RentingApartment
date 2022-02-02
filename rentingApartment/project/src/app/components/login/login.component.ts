import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormBuilder,FormGroup,} from '@angular/forms';
import { RentorService } from 'src/app/services/rentor.service';
import { MatDialog } from '@angular/material/dialog';
import { RentorComponent } from '../rentor/rentor.component';
import { Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  rentorLogin: any;
  form: FormGroup;

  constructor(
    private rentorService: RentorService,
    private fb: FormBuilder,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.initForm();
  }
  toggleHide() {
    this.hide = !this.hide;
  }

  hide = true;

  private initForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login() {
    this.rentorService
      .login(this.email.value, this.password.value)
      .subscribe((res: any) => {
        if (res.IsSuccess && res.Data) {
          //todo - save data 
          this.rentorLogin=res.Data;
          this.rentorService.rentorLogin = this.rentorLogin;   
          this.rentorService.NewRentor = null;                 
          this.router.navigate(['/rentor']);
        } else {
          this.dialog.open(DialogElements);
        }
        /* (this.rentorLogin = rentor),
        (this.rentorService.rentorLogin = this.rentorLogin),
        console.log(this.rentorService.rentorLogin); */
      });
  }

  openDialog() {
    this.dialog.open(RentorComponent);
    // this.dialog.open(NewApartmentComponent);
  }

  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
}

@Component({
  selector: 'dialog-elements',
  templateUrl: './dialog-elements.html',
})
export class DialogElements {}
