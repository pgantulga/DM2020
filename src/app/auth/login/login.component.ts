import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }
  loginWithGoogle(): any {
    this.authService.googleLogin()
      .then(() => console.log('Google login successfully'))
      .catch(err => {console.log('Login error: ' + err); });
  }
  signOut(): any {
    this.authService.signOut();
  }

}
