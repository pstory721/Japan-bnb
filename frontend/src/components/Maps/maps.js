/*global google*/
import React, {  useEffect } from "react";
import { GoogleMap, useJsApiLoader, } from '@react-google-maps/api';
import { useDispatch, useSelector } from "react-redux";
import { GetStuff } from "../../store/home";

const containerStyle = {
  width: '800px',
  height: '1200px',
};

const center = {
  lat: 36.2048,
  lng: 138.2529,
};

const Maps = ({ apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });


const dispatch = useDispatch();
const searchSpots = useSelector((state) => state.Home.spots);
useEffect(() => {
  dispatch(GetStuff());
}, [dispatch]);

  return (
    <>
      {isLoaded && (
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={7}

        />
      )}
       {/* {searchSpots.map((spot) => (
         new google.maps.Marker({
          position: {lat:spot.lat,lng:spot.lng},
          title: "spot marker",
        })
       ))} */}
    </>
  );
};


export default React.memo(Maps);
