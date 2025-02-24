import {carsList as cars} from "./cars"
import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import  MakrerUrl from './customMarkers/grader.png'
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function List() {
    
 
    let res = cars.map(function(item) {
       return <p key={item.id}>
          <span>{item.name} </span>
          <span>{item.lat} </span>
          <span>{item.lng} </span>
          <span>{item.currentState} </span>
       </p>;
    });
 
    return (<div>
       {res}
    </div>)
 }