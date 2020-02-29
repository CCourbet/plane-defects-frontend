import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public isLoggedIn = this.authenticationService.isLoggedIn;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.authenticationService.isLoggedEmitter.subscribe(isLoggedIn => this.isLoggedIn = isLoggedIn);
  }

  public logout(): void {
    this.authenticationService.logout();
  }
}
