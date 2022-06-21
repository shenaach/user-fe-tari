import React from "react";
import { MapContainer, TileLayer, GeoJSON, Marker,Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./mymap.scss";
// import "./mymap.css";
import mapData from "../../components/data/indonesia.json";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";

const MyMap = () => {
    let data = mapData.map((map) => map.geojson);
    // console.log(mapData);
    //mapdata ; array , map(object)
    
    // mapData.map((map) => console.log(map.lat));
    // mapData.map((map) => console.log(map));

    const countryStyle ={
      fillOpacity: 0.7,
      fillColor: 'red',
      color: 'black',
      weight: 2
    };

    // const onEachProvince = (province, layer) => {
      
      // let high = 99.46658893;
      // let low = 44.24769678;

      // const countryName = province.properties.Propinsi;
      // console.log(countryName);
      // layer.bindPopup(countryName);
      // console.log(province.properties.Propinsi);

    //   if (totalBudaya >= high) {
    //     layer.options.fillColor = '#73D737';
    //   } else if (totalBudaya <= low) {
    //     layer.options.fillColor = '#FB4141';
    //   } else {
    //     layer.options.fillColor = '#E1FB41';
    //   }
    // };
    // }
    
    return (
        <div className="MyMap">
            <MapContainer
                center={[0.7893, 113.9213]}
                zoom={5}
                scrollWheelZoom={false}
                style={{ height: "100%" }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <GeoJSON
                  style={countryStyle} 
                  data={data}>
                </GeoJSON>
                {
                    mapData.map((map) => (
                      <Marker 
                      position={[map.lat, map.long]}
                      icon={
                        new Icon({
                            iconUrl: markerIconPng,
                            iconSize: [25, 41],
                            iconAnchor: [12, 41],
                        })
                    }
                      >
                      <Popup>
                        {map.name}
                      </Popup>
                      </Marker>
                    ))
                }
                  
            </MapContainer>
        </div>
    );
};

export default MyMap;