
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent {
  signupData = {
    name: '',
    email: '',
    password: ''
  };

  signup() {
    // Implement signup functionality here
    console.log('Signing up...', this.signupData);
  }
}
