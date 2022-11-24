/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { GoogleMap, InfoWindow, Marker } from "@react-google-maps/api";
import axios from "axios";
import { Fair } from "../../types";
import SearchFair from "../SearchFair/search-fair";

const Map: React.FC = ()=> {

  const [data, setData] = useState([]);
  const [weekday, setWeekday] = useState("todos");

  const getData = async () => {
    const { data } = await axios.get('fairs');
    setData(data);
  };
  useEffect(() => {
    getData();
  }, []);

  const markers: Fair [] = [];
  data.forEach((currentFair: Fair) => {
    const formatData = {
        id: currentFair.id, 
        name:  currentFair.name, 
        position: currentFair.position,
      }
    markers.push(formatData)
})

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const handleOnLoad = (map) => {
    const bounds = new google.maps.LatLngBounds();
    markers.forEach(({ position }) => bounds.extend(position));
    map.fitBounds(bounds);
  };

  const getWeekday = () =>{
    
  }

  // This is for testing the getFairsByWeekday endpoint

  // const getSearchedFairs = async () => {
  //   const { data } = await axios.get('fairs/Domingo');
  //   setData(data);
  // };
  // useEffect(() => {
  //   getSearchedFairs();
  // }, []);

  return (
    <div>
    <h1>Feiras de Porto Alegre</h1>
    <SearchFair />

   <GoogleMap
      onLoad={handleOnLoad}
      onClick={() => setActiveMarker(null)}
      zoom={15}
      center = {{lat: -30.031250, lng: -51.212247}} 
      mapContainerStyle={{ width: "80vw", height: "80vh" }}
    >
      {markers.map(({ id, name, position }) => (
        <Marker
          key={id}
          position={position}
          onClick={() => handleActiveMarker(id)}
        >
          {activeMarker === id ? (
            <InfoWindow onCloseClick={() => setActiveMarker(null)}>
              <div>{name}</div>
            </InfoWindow>
          ) : null}
        </Marker>
      ))}
    </GoogleMap>
    </div>
  );
}

export default Map;
