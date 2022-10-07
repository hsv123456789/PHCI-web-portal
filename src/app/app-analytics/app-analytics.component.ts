import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-analytics',
  templateUrl: './app-analytics.component.html',
  styleUrls: ['./app-analytics.component.css'],
})
export class AppAnalyticsComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
  //Code for bar graph
  barGraph = {
    title: {
      text: 'Angular Column Chart with Index Labels',
    },
    animationEnabled: true,
    axisY: {
      includeZero: true,
    },
    data: [
      {
        type: 'column', //change type to bar, line, area, pie, etc
        //indexLabel: "{y}", //Shows y value on all Data Points
        indexLabelFontColor: '#5A5757',
        dataPoints: [
          { x: 10, y: 71 },
          { x: 20, y: 55 },
          { x: 30, y: 50 },
          { x: 40, y: 65 },
          { x: 50, y: 71 },
          { x: 60, y: 92, indexLabel: 'Highest\u2191' },
          { x: 70, y: 68 },
          { x: 80, y: 38, indexLabel: 'Lowest\u2193' },
          { x: 90, y: 54 },
          { x: 100, y: 60 },
        ],
      },
    ],
  };
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
          { y: 75.0, name: 'Android' },
          { y: 25.2, name: 'IOS' },
        ],
      },
    ],
  };
  userData = [
    { x: 1, y: 10 },
    { x: 2, y: 13 },
    { x: 3, y: 18 },
    { x: 4, y: 20 },
    { x: 5, y: 17 },
    { x: 6, y: 10 },
    { x: 7, y: 13 },
    { x: 8, y: 18 },
    { x: 9, y: 20 },
    { x: 10, y: 17 },
  ];
  chart: any;
  // code for linear graph
  userStatistics = {
    exportEnabled: true,
    title: {
      text: 'No of active users in the application',
    },
    data: [
      {
        type: 'line',
        dataPoints: this.userData,
      },
    ],
  };
  getChartInstance(chart: object) {
    this.chart = chart;
    setTimeout(this.updateChart, 10000); //Chart updated every 10 second
  }
  updateChart = () => {
    var yVal =
      this.userData[this.userData.length - 1].y +
      Math.round(5 + Math.random() * (-5 - 5));
    this.userData.push({
      x: this.userData[this.userData.length - 1].x + 1,
      y: yVal,
    });

    if (this.userData.length > 10) {
      this.userData.shift();
    }
    this.chart.render();
    setTimeout(this.updateChart, 10000); //Chart updated every 10 second
  };
  //Shows the top three services chose by the customer in the past month
  serviceSelected = {
    animationEnabled: true,
    exportEnabled: true,
    title: {
      text: 'TREATMENT ANALYSIS',
      fontFamily: 'Calibri, Arial, sans-serif',
    },
    axisX: {
      title: 'Quarter',
      reversed: true,
    },
    axisY: {
      suffix: '%',
    },
    toolTip: {
      shared: true,
    },
    data: [
      {
        type: 'stackedBar100',
        name: 'Treatment1',
        showInLegend: 'true',
        yValueFormatString: "#,###'%'",
        color: '#5570b2',
        dataPoints: [
          { y: 40.75, label: 'Q1' },
          { y: 27.3, label: 'Q2' },
          { y: 11, label: 'Q3' },
          { y: 34, label: 'Q4' },
        ],
      },
      {
        type: 'stackedBar100',
        name: 'Treatment2',
        showInLegend: 'true',
        yValueFormatString: "#,###'%'",
        color: '#f6d788',
        dataPoints: [
          { y: 12.75, label: 'Q1' },
          { y: 35.7, label: 'Q2' },
          { y: 59, label: 'Q3' },
          { y: 18, label: 'Q4' },
        ],
      },
      {
        type: 'stackedBar100',
        name: 'Treatment3',
        showInLegend: 'true',
        yValueFormatString: "#,###'%'",
        color: '#8D5531',
        dataPoints: [
          { y: 12.5, label: 'Q1' },
          { y: 25, label: 'Q2' },
          { y: 8, label: 'Q3' },
          { y: 23, label: 'Q4' },
        ],
      },
      {
        type: 'stackedBar100',
        name: 'Treatment 4',
        showInLegend: 'true',
        yValueFormatString: "#,###'%'",
        color: '#c13c3c',
        dataPoints: [
          { y: 34, label: 'Q1' },
          { y: 12, label: 'Q2' },
          { y: 22, label: 'Q3' },
          { y: 25, label: 'Q4' },
        ],
      },
    ],
  };
}
