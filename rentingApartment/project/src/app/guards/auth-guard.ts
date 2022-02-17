import { state } from '@angular/animations';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RentorService } from '../services/rentor.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private rentorServise: RentorService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const currentUserToken = this.rentorServise.currentUserToken;
    if (this.rentorServise.currentUserToken) {
      //logged in so return true
      return true;
    }
    //not logged in so redirect to login page with the return url
    this.router.navigate(["/Search"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
