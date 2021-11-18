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
    <div className="container">
      <div className="home-back">
        <Link to="/sign-up">Sign up now</Link>
      </div>
      <div className="container2">
        <div>
          <h2 style={{color:"white" , border:"1px solid white"}}>hiiiiiiiiiiii</h2>
          <image className="first" src="https://res.cloudinary.com/dveuedvvm/image/upload/v1637197165/buvh0lklouey96h2pwjq.jpg" alt="whoops that broke"></image>
        </div>
        <div>
        <h2 style={{color:"white"},{border:"1px solid white"}}>hiiiiiiiiiiii</h2>
          <image style={{width:"400px" ,height:"400px"}} className="second" src="https://res.cloudinary.com/dveuedvvm/image/upload/v1637201304/03047561_original_f9rh8n.jpg" alt="whoops that broke"></image>
        </div>
        <div>
        <h2 style={{color:"white"},{border:"1px solid white"}}>hiiiiiiiiiiii</h2>
          <image className="third" src="https://res.cloudinary.com/dveuedvvm/image/upload/v1637201332/images_tjudtb.jpg" alt="whoops that broke"></image>
        </div>
      </div>
    </div>
  );
}
