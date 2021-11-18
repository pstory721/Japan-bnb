import React, { useEffect } from "react";
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
        <div className="yo">
        <h1> not sure where to start? <br></br> Perfect we've got your back</h1>
        <button id ="ann"><Link to="/sign-up">Sign up now</Link> </button>
        </div>
      </div>
      <div className="container2">
        <div className="patrickNo">
          <div>
            <h2 className='left'> Visit the bustling cities </h2>
          <img
            className="first"
            src="https://res.cloudinary.com/dveuedvvm/image/upload/v1637197165/buvh0lklouey96h2pwjq.jpg"
            alt="whoops that broke"
          />
          </div>
          <div>
          <h2 className='left'> Stay in unique homes </h2>
          <img
            className="second"
            src="https://res.cloudinary.com/dveuedvvm/image/upload/v1637201304/03047561_original_f9rh8n.jpg"
            alt="whoops that broke"
          />
          </div>
          <div>
          <h2 className='left'> Live in Traditional villas accross<br></br> the country</h2>
          <img
            className="third"
            src="https://res.cloudinary.com/dveuedvvm/image/upload/v1637201332/images_tjudtb.jpg"
            alt="whoops that broke"
          />
          </div>
        </div>
      </div>
    </div>
  );
}
