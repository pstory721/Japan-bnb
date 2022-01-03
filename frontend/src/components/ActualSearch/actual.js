import React, {  useEffect } from "react";
import { GetStuff } from "../../store/home";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SearchContainer from "../Maps/searchIndex"
import "./actual.css"
export function Search() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const searchSpots = useSelector((state) => state.Search.spots[0]);

  useEffect(() => {
    dispatch(GetStuff());
  }, [dispatch]);

  return (
    <div >
      <div className="container4">
        <div className='chuck1'>
        <h1> Stays in the countryside </h1>
        <p> more than 28,000 people have stayed in Japans country side.<br></br>On average they rated their stays 4.8 out of 5 stars. </p>
        </div>
        <div className='fourtwentysixtynine1'>
        {searchSpots?.map((spot) => (
          <Link to={`spot-page/${spot.id}`}>
            <div className='bleh1'>
            <img className = 'pho1' src={spot?.image_url} alt="whoops that broke"/> <br></br>
            <h2 className="jacob1"> {spot?.address}</h2>
            <span className="jacob1">${spot.price} a night </span>

            </div>
            </Link>
        ))}
        </div>
      </div>
      <div className="map1">
        <SearchContainer />

      </div>
    </div>
  );
}
