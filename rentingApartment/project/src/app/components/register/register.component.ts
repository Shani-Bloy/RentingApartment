import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { OnInit, Component, OnDestroy } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';
import { RentorService } from '../../services/rentor.service';
import { Subject, Subscription } from 'rxjs';
import { rentor } from '../../models/rentor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  constructor(private rentorService: RentorService, private router: Router) {}

  subs: Subscription[] = [];

  ngOnInit(): void {}
  hide = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  addRentor(
    FirstName: string,
    LastName: string,
    Password: string,
    Mail: string,
    Phone: string,
    AddaitionalPhone: string
  ) {
    this.subs.push(
      this.rentorService
        .addRentor({
          FirstName,
          LastName,
          Password,
          Mail,
          Phone,
          AddaitionalPhone,
        } as rentor)
        .subscribe((res: any) => {
          if (res.IsSuccess) {
            alert('the rentor registered successfuly');
            console.log(res.Data);
            this.rentorService.NewRentor = res.Data;
            this.rentorService.rentorLogin = null;
            this.router.navigate(['/rentor']);
          } else alert('erorr :( please try again');
          /*
          this.rentorLogin=res.Data;
          this.rentorService.rentorLogin = this.rentorLogin;                   
          this.router.navigate(['/rentor']);
        */
        })
    );
  }
  ngOnDestroy(): void {
    this.subs.forEach((s) => s.unsubscribe());
  }
}
