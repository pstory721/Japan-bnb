
import React, { useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useDispatch, useSelector } from "react-redux";
import { GetStuff } from "../../store/home";
//
let containerStyle = {
  width: "800px",
  height: "800px",
};

let x = window.matchMedia("(min-width: 2499px)");

function myFunction(x){
  if(x.matches){
    containerStyle = {
      width: "1000px",
      height: "1000px",
    };
  }
}

myFunction(x)

let y = window.matchMedia("(min-width: 1439px)");

function myFunction1(y){
  if(y.matches){
    containerStyle = {
      width: "500px",
      height: "500px",
    };
  }
}

myFunction1(y)

const center = {
  lat: 36.2048,
  lng: 138.2529,
};

const SearchMap = ({ apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const dispatch = useDispatch();
  const searchSpots = useSelector((state) => state.Search.spots[0]);
  useEffect(() => {
    dispatch(GetStuff());
  }, [dispatch]);

  return (
    <div>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={7}>
          {searchSpots?.map((marker) => {
            return (
              <Marker
                position={{ lat: +marker?.lat, lng: +marker?.lng }}
                key={marker?.id}
                // icon={{

                //   origin: new window.google.maps.Point(0, 0),
                //   anchor: new window.google.maps.Point(31, 10),
                //   scaledSize: new window.google.maps.Size(60, 60),
                // }}
              ></Marker>
            );
          })}
        </GoogleMap>
      )}
    </div>
  );
};

export default React.memo(SearchMap);
