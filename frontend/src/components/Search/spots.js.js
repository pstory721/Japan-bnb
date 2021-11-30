import React, {  useEffect } from "react";
import { GetStuff } from "../../store/home";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MapContainer from "../Maps/index"
import "./search.css"
export function Spots() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const searchSpots = useSelector((state) => state.Home.spots);

  useEffect(() => {
    dispatch(GetStuff());
  }, [dispatch]);






  return (
    <div >
      <div className="cuck">
        <div className="cuck-title">
      <h1> Stays in Japan </h1>
      <p> more than 28,000 people have stayed in Japans country side.<br></br>On average they rated their stays 4.8 out of 5 stars. </p>
      </div>
      </div>
      <div className="container3">
        <div className="fourtwentysixtynine">
        {searchSpots?.map((spot) => (
          <Link to={`spot-page/${spot.id}`}>
            <div className='bleh'>
            <img className = 'pho' src={spot?.image_url} alt="whoops that broke"/> <br></br>
            <h2 className="jacob"> {spot?.address}</h2>
            <span className="jacob">${spot.price} a night </span>
            </div>
            </Link>
        ))}</div>
      </div>
      <div className="map">
        <MapContainer  />

      </div>
    </div>
  );
}
