import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserData = {
    name: '',
    password: '',
  };
  constructor(
    public route: ActivatedRoute,
    public router: Router,
    private authenticationService: AuthService
  ) {}

  ngOnInit() {}
  loginUser() {
    this.authenticationService.loginUser(this.loginUserData).subscribe(
      (response) => {
        console.log(response);
        localStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      (error) => console.log(error)
    );
  }
}
