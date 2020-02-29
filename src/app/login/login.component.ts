import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';

//import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public authentication = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  public isHidden = true;
  public isLoginWrong = false;

  constructor(
    private loginService: LoginService,
    private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(): void {
    const auth = this.authentication.value;
    if (auth.username && auth.password) {
      this.loginService.login(auth.username, auth.password).subscribe(
        (isLogin) => {
          if (isLogin) {
            this.router.navigateByUrl('/');
          } else {
            this.isLoginWrong = true;
          }
        }
      );
    }
  }

}