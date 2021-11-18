import React, {  useEffect } from "react";
import { GetStuff } from "../../store/home";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

//test
export function Search() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const searchSpots = useSelector((state) => state.Home.spots);

  useEffect(() => {
    dispatch(GetStuff());
  }, [dispatch]);






  return (
    <div>
      <div>
        {searchSpots?.map((spot) => (
          <Link to={`spot-page/${spot.id}`}>
            <div>
            <h2> {spot?.name} for {spot.price} a night </h2>
            <img src={spot?.image_url} alt="whoops that broke"/>
            </div>
            </Link>
        ))}
      </div>
    </div>
  );
}
