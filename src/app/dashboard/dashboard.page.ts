import { Component, ViewChild, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "dashboard.page.html",
  styleUrls: ["dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
  @ViewChild("barChart", { static: false }) barChart;

  public bars: any;
  public colorArray: any;
  public teams: Team[];

  constructor() {}

  ngOnInit() {
    this.teams = [
      { name: "Team1", tpp: 6.5 },
      { name: "Team2", tpp: 6.1 },
      { name: "Team3", tpp: 5.5 },
      { name: "Team4", tpp: 5 },
      { name: "Team5", tpp: 4.8 }
    ];
  }

  ionViewDidEnter() {
    this.createBarChart();
  }

  public createBarChart(): void {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: "line",
      data: {
        labels: [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        datasets: [
          {
            label: "Trash collected",
            data: [110, 170, 220, 190, 240, 210, 240, 250],
            backgroundColor: "rgb(0, 0, 0, 0)",
            borderColor: "rgb(86,157,214)",
            borderWidth: 4
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
          ],
        }
      }
    });
  }
}

export interface Team {
  name: string;
  tpp: number;
}
