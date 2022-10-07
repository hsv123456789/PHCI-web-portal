import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-analytics',
  templateUrl: './web-analytics.component.html',
  styleUrls: ['./web-analytics.component.css'],
})
export class WebAnalyticsComponent implements OnInit {
  // Code for pie chart
  chartOptions = {
    animationEnabled: true,
    title: {
      text: ' No of Users',
    },
    data: [
      {
        type: 'pie',
        startAngle: -90,
        indexLabel: '{name}: {y}',
        yValueFormatString: "#,###.##'%'",
        dataPoints: [
          { y: 50.0, name: 'Mobile Phone' },
          { y: 25.0, name: 'Tablet' },
          { y: 25.0, name: 'Desktop' },
        ],
      },
    ],
  };
  //code for doughnut chart for user location
  userLocation = {
    animationEnabled: true,
    title: {
      text: 'User accessed the website from ',
    },
    data: [
      {
        type: 'doughnut',
        yValueFormatString: "#,###.##'%'",
        indexLabel: '{name}',
        dataPoints: [
          { y: 75, name: 'Coimbatore' },
          { y: 25, name: 'Outside Coimbatore' },
        ],
      },
    ],
  };

  constructor() {}

  ngOnInit(): void {}
}
