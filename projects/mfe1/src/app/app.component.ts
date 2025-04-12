import { AfterViewInit, Component } from '@angular/core';
// import { latLng, tileLayer } from 'leaflet';
// import { LeafletModule } from '@bluehalo/ngx-leaflet';
import lft from 'esm-leaflet';

@Component({
  selector: 'app-root',  
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  title = 'mfe1';
  
    private map!: any;
  
    private initMap(): void {
      this.map = lft.map('map', {
        center: [45.4342, 12.3398], // Coordinate di Venezia
        zoom: 15
      });
  
      lft.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(this.map);
  
      // Marker in Piazza San Marco
      const sanMarcoMarker = lft.marker([45.4336, 12.3408]) // Piazza San Marco
        .addTo(this.map)
        .bindPopup('Piazza San Marco')
        .openPopup();
    }
  
    ngAfterViewInit(): void {
      this.initMap();
    }

// ngOnInit() {
//   const map = lfl.map('map').setView([45.4238816,12.3350456], 13);

//   lfl.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     attribution: '© OpenStreetMap contributors'
//   }).addTo(map);
// }


}
