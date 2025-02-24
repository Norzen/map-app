import {carsList as cars} from "./cars"
import React from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import  MakrerUrl from './customMarkers/grader.png'
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

export default function List() {
    
    let position =[55.806365, 37.635497]
    const graderIcon = L.icon({
        iconUrl: MakrerUrl,
        iconSize: [50, 50],
        iconAnchor: [25, 50],
      });
    let arr = [];
    let arrNames =[];
    for(let i = 0; i<cars.length; i++) {
        arr.push([cars[i].lat, cars[i].lng])
        arrNames.push(cars[i].name)
    }
    
    /*for(let i = 0; i<cars.length; i++) { let coor = [cars[i].lat, cars[i].lng]
    return (<Marker position={coor} icon={graderIcon}>
                <Popup>Тут стоит {cars[i].name}</Popup>
            </Marker>)}*/
    return arr.map((coordinata, index) => {
        return <Marker position={coordinata}>
                    <Popup>Тут стоит {arrNames[index]}</Popup>
               </Marker>;
        })
 }