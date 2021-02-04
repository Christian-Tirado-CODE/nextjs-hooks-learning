import React, { useState, useEffect } from "react";
import * as EventsData from '../../data.json';
import eventStyles from '../../styles/Event.module.css';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useLoadScript
} from "@react-google-maps/api";
import BottomNav from "../../components/BottomNav/BottomNav";

const mapContainerStyle = {
  width: '100vw',
  height: '100vh'
}

const center = {
  lat: 18.220833, 
  lng: -66.5901 
}

const options = {
  disableDefaultUI: true,
  zoomControl: false
}

const Map = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [loadedEvents, setLoadedEvents] = useState();
  const {isLoaded, loadError} = useLoadScript({
     googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
   })

   /*
   useEffect(() => {
     const sendRequest = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/events/');
      
        const responseData = await response.json();

        if(!response.ok){
          throw new Error(responseData.message);
        }

        setLoadedEvents(responseData.events);
        
      } catch(err){

      } 
      
      };
      sendRequest();
      
   }, []);
    */

   
   if(loadError) return "Error loading maps";
   if(!isLoaded) return "Loading";
  return <>
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={8}
      options={options}
      center={center}
    >
      
      {/* https://www.latlong.net*/}

      {EventsData.events.map((evt) => (
        <Marker
          key={evt.id}
          position={{ 
            lat: evt.coordinates[0], 
            lng: evt.coordinates[1]}}
            onClick={()=> {
              setSelectedEvent(evt);
            }}
            icon={{
              url: '/logo.png',
              scaledSize: new window.google.maps.Size(48, 38.75)
            }}
        />
        
          ))}
      {selectedEvent && (
        <InfoWindow position={{ 
          lat: selectedEvent.coordinates[0], 
          lng: selectedEvent.coordinates[1]}}
          onCloseClick={() => {
            setSelectedEvent(null);
          }}
          >
          <div className={eventStyles.EventPopUp}>
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.description}</p>
            <a href="">Ver mas info</a>
            </div>
        </InfoWindow>
        )}
        
    </GoogleMap>
    <BottomNav />
  </>;
};

export default Map;