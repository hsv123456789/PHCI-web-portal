import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerUserData = {
    name: '',
    password: '',
  };
  constructor(private _auth: AuthService) {}
  registerUser() {
    this._auth.registerUser(this.registerUserData).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem('token', response.token);
      },
      (error) => console.log(error)
    );
  }

  ngOnInit(): void {}
}
