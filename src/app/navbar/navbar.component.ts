import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  collapsed = true;
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
