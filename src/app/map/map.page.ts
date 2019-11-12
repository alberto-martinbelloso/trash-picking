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
  public trashPins: Station[];
  private map: Map;

  ionViewDidEnter() {
    this.stations = [
      {
        position: {
          lat: 55.619944,
          lgn: 12.091104
        },
        title: "Trash Station A"
      },
      {
        position: {
          lat: 55.61697,
          lgn: 12.092078
        },
        title: "Trash Station B"
      },
      {
        position: {
          lat: 55.617241,
          lgn: 12.08673
        },
        title: "Trash Station C"
      }
    ];

    this.trashPins = [
      {
        position: {
          lat: 55.621606,
          lgn: 12.088752
        },
        title: "Lots of trash here!"
      },
      {
        position: {
          lat: 55.617141,
          lgn: 12.088752
        },
        title: "Lots of trash here!"
      },
      {
        position: {
          lat: 55.621029,
          lgn: 12.089676
        },
        title: "Lots of trash here!"
      },
      {
        position: {
          lat: 55.619376,
          lgn: 12.090181
        },
        title: "Lots of trash here!"
      },
      {
        position: {
          lat: 55.615313,
          lgn: 12.083836
        },
        title: "Lots of trash here!"
      },
      {
        position: {
          lat: 55.616085,
          lgn: 12.092580
        },
        title: "Lots of trash here!"
      }
    ];
    this.leafletMap();
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

    const trashIcon = icon({
      iconUrl: "assets/trashPin.png",
      iconSize: [50, 50],
      popupAnchor: [0, -10]
    });

    this.trashPins.forEach(pin => {
      marker([pin.position.lat, pin.position.lgn], {
        icon: trashIcon
      })
        .bindPopup(`<b>${pin.title}</b>`, { autoClose: false })
        .addTo(this.map)
    });
  }

  ionViewWillLeave() {
    this.map.remove();
  }

  logout() {
    this.authService.logout();
  }
}
