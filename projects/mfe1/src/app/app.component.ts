import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';

import * as L from 'leaflet/dist/leaflet-src.esm.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  encapsulation: ViewEncapsulation.None   // Very important for CSS correctness
})
export class AppComponent implements  AfterViewInit {
  title = 'mfe1';

  private map!: any;

  private initMap(): void {
    
    //Set the icons explicitly relative to MFE location
    L.Icon.Default.mergeOptions(
      {
        iconUrl: 'http://localhost:4500/assets/leaflet/marker-icon.png',
        shadowUrl: 'http://localhost:4500/assets/leaflet/marker-shadow.png',
      }
    );
    this.map = L.map('map', {
      center: [45.4342, 12.3398], // Coordinates of Venezia
      zoom: 15
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    // Marker in Piazza San Marco
    const sanMarcoMarker = L.marker([45.4336, 12.3408]) // San Marco Square, Venice
      .addTo(this.map)
      .bindPopup('Piazza San Marco')
      .openPopup();
  }

  ngAfterViewInit(): void {
    this.initMap();
  }
}
