import React, {  useEffect } from "react";
import { GetStuff } from "../../store/home";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./home.css";


export function Home() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const homespots = useSelector((state) => state.Home.spots);

  useEffect(() => {
    dispatch(GetStuff());
  }, [dispatch]);

  return (
    <div>
        <div>{homespots.map((spot) => spot.name)}</div>
    </div>
  );
}
