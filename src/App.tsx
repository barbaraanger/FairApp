
import './App.css';
import Map from './Components/Map/map';
import { useLoadScript } from "@react-google-maps/api";
import React, { ReactElement } from "react";

function App() {

const { isLoaded } = useLoadScript({
  googleMapsApiKey: "AIzaSyDZMaumquCN-AF_Jx0EIllQPmt58bpECuc" // Add your API key
});
if (isLoaded)
  return (
    <>
      <Map />
    </>
  );

 else return (<></>);
}

export default App;
