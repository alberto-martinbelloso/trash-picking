import { Component, ViewChild } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.page.html",
  styleUrls: ["dashboard.page.scss"]
})
export class DashboardPage {
  @ViewChild("barChart", {static:false}) barChart;

  public bars: any;
  public colorArray: any;

  constructor() {}

  ionViewDidEnter() {
    this.createBarChart();
  }

  public createBarChart(): void {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: "line",
      data: {
        labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"],
        datasets: [
          {
            label: "Trash collected",
            data: [2.5, 3.8, 2.7, 4.1, 3, 3.1, 5],
            backgroundColor: "rgb(0, 0, 0, 0)", 
            borderColor: "rgb(38, 194, 129)",
            borderWidth: 5
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }
}
