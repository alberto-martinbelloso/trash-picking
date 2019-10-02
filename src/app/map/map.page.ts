import { Component } from "@angular/core";
import { AuthService } from "./../auth/auth.service";
import { Platform } from "@ionic/angular";
import { Router } from "@angular/router";
import { Map, tileLayer, marker, icon } from "leaflet";
import { HttpClient } from "@angular/common/http";
import { Station } from "./Station";

@Component({
  selector: "app-map",
  templateUrl: "map.page.html",
  styleUrls: ["map.page.scss"]
})
export class MapPage {
  constructor(
    private authService: AuthService,
    public http: HttpClient,
    public plt: Platform,
    public router: Router
  ) {}

  public stations: Station[];
  private map: Map;

  ionViewDidEnter() {
    this.stations = [
      {
        position: {
          lat: 55.618383,
          lgn: 12.089201
        },
        title: "Station A"
      },
      {
        position: {
          lat: 55.61697,
          lgn: 12.092078
        },
        title: "Station B"
      },
      {
        position: {
          lat: 55.617241,
          lgn: 12.08673
        },
        title: "Station C"
      }
    ];
    this.leafletMap();
    // this.initMap();
  }

  initMap() {
    this.map = new Map("map").setView([55.6181481, 12.089728], 462);
    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    const customMarkerIcon = icon({
      iconUrl: "assets/marker.png",
      iconSize: [64, 64],
      popupAnchor: [0, -20]
    });
    this.stations.forEach(station => {
      marker([station.position.lat, station.position.lgn], {
        icon: customMarkerIcon
      })
        .bindPopup(`<b>${station.title}</b>`, { autoClose: false })
        // .on("click", () => this.router.navigateByUrl("/station"))
        .addTo(this.map)
        .openPopup();
    });
  }

  leafletMap() {
    // In setView add latLng and zoom
    this.map = new Map("map").setView([55.6181481, 12.089728], 16);
    tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {}).addTo(
      this.map
    );

    const customMarkerIcon = icon({
      iconUrl: "assets/marker.png",
      iconSize: [64, 64],
      popupAnchor: [0, -20]
    });

    this.stations.forEach(station => {
      marker([station.position.lat, station.position.lgn], {
        icon: customMarkerIcon
      })
        .addTo(this.map)
        .bindPopup(`<b>${station.title}</b>`, { autoClose: false })
        // .on("click", () => this.router.navigateByUrl("/station"))
        .openPopup();
    });
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  logout() {
    this.authService.logout();
  }
}
