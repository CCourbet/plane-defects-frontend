import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private authentication = {
    email: "admin",
    password: "admin"
  }

  private log: boolean = false;

  constructor(private router: Router) { }

  login(email: string, password: string): Observable<boolean> {
    console.log(email);
    if (email === this.authentication.email && password === this.authentication.password) {
      this.log = true;
      return of(true)
    } else {
      this.log = false;
      return of(false);
    }
  }

  canActivate(): boolean {
    if (!this.log) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}