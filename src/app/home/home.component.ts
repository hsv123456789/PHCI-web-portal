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
   json = {
    "title" : "langesh"
   }
   card_components =[ {
      title:"Makes progress easier",
      text: "It helps you understand your application better and you can work with it very easily compared to other application ",
      ImagePath : 'assets/images/progress.jpg',
   },
   {
    title:"Makes progress easier",
    text: "financial management is very easy if you know who is using your application and how are people using it ",
    ImagePath : 'assets/images/finance.jpg',
 },
 {
  title:"Makes progress easier",
  text: "It helps you understand your application better and you can work with it very easily compared to other application ",
  ImagePath : 'assets/images/problem.jpg',
},
  
  ] ;
  constructor() {
    this.ImagePath = 'assets/images/progress.jpg';
    this.ImagePath1 ='assets/images/finance.jpg';
    this.ImagePath2 = 'assets/images/problem.jpg';
   }
   

  ngOnInit(): void {
  }

}
