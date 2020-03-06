import { BinService } from './../../bin.service';
import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-mapbox',
  templateUrl: './mapbox.page.html',
  styleUrls: ['./mapbox.page.scss'],
})
export class MapboxPage implements OnInit {
  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/outdoors-v9';
  lat = 10.6073;
  lng = 35.8239;
  message = 'Hello World!';

  // data
  source: any;
  markers: any=[];

  constructor(private binService:BinService) { 
    mapboxgl.accessToken = environment.mapbox.accessToken
  }
  ionViewWillEnter()
  {
   
  }
getAllMarkers()
{ let id = localStorage.getItem('id');
  this.binService.getBinById(id).subscribe(data=>{
    let result:any = data; 
    console.log("Markers",result)
    this.markers=result; 
    this.buildMap();
    console.log(this.markers);
  })
}
  ngOnInit() {
   
    this.getAllMarkers(); 
  }
  ionViewDidEnter()
  {
    //this.drawLine(); 
  }
  buildMap() {
    this.map = new mapboxgl.Map({
      container: 'map',
      style: this.style,
      zoom: 13,
      center: [this.lat, this.lng]
    });
    this.markers.forEach(elm=>{
      if(elm.alt!=null && elm.lng!=null)
      {
        var marker = new mapboxgl.Marker()
        .setLngLat([elm.alt, elm.lng])
        .addTo(this.map);
      }
      
    }); 
    //this.drawLine(); 
   

  }

  drawLine()
  {
    let cordinates = [] ; 
    this.markers.forEach(elm=>{
      if(elm.alt !=0 && elm.lng!=0)
      {
        cordinates.push([elm.alt,elm.lng]);
      }
    
    }) ; 
    console.log("cordinates",cordinates); 
   
    this.map.addLayer({
      id: 'geojson',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: cordinates
          }
        }
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round'
      },
      paint: {
        'line-color': '#3171e0',
        'line-width': 3
      }
    })
      
  }
}
