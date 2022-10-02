import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   ImagePath:string ;
   ImagePath1:string;
   ImagePath2:string;
  constructor() {
    this.ImagePath = 'assets/images/progress.jpg';
    this.ImagePath1 ='assets/images/finance.jpg';
    this.ImagePath2 = 'assets/images/problem.jpg';
   }

  ngOnInit(): void {
  }

}
