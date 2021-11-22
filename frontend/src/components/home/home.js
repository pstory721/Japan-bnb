import React, { useEffect } from "react";
import { GetStuff } from "../../store/home";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SignupFormModal from "../SignupFormModal";
import "./home.css";

export function Home() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const homespots = useSelector((state) => state.Home.spots);

  useEffect(() => {
    dispatch(GetStuff());
  }, [dispatch]);


let signup;
if (!sessionUser) {
  signup = <SignupFormModal />
}

  let button3;
  if (sessionUser) {
    button3 = <button className="link"><Link to="search">Ready to see natural beauty?</Link></button>
  }
 let button2;
  if (sessionUser) {
    button2 =  <button className="link"><Link to="search"> Ready to be unique?</Link></button>
  }
 let button1;
  if (sessionUser) {
    button1 = <button className="link"><Link to="search">Ready to visit cities?</Link></button>
  }

  return (
    <div className="container">
      <div className="home-back">
        <div className="yo">
        <h1> not sure where to start? <br></br> Perfect we've got your back</h1>
        {signup}
        </div>
      </div>
      <div className="container2">
        <div className="patrickNo">
          <div>
            <div className="left">
            <h2 className=''> Visit the bustling cities </h2>
           {button1}
            </div>
          <img
            className="first"
            src="https://res.cloudinary.com/dveuedvvm/image/upload/v1637197165/buvh0lklouey96h2pwjq.jpg"
            alt="whoops that broke"
          />
          </div>
          <div>
          <div className="left">
          <h2 className=''> Stay in unique homes </h2>
         {button2}
          </div>
          <img
            className="second"
            src="https://res.cloudinary.com/dveuedvvm/image/upload/v1637201304/03047561_original_f9rh8n.jpg"
            alt="whoops that broke"
          />
          </div>
          <div>
          <div className="left">
          <h2 className=''> Live in Traditional villas accross<br></br> the country</h2>
         {button3}
          </div>
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
