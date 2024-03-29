import React, { useState,useEffect } from "react";
import { NavLink, Link,useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import * as sessionActions from "../../store/session";
import "./Navigation.css";
import SignupFormModal from "../SignupFormModal";
import { searchASpot } from "../../store/search";
//
function Navigation({ isLoaded }) {
  const history = useHistory()
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [input, setInput] = useState("");
  const [errors, setErrors] = useState([]);






  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = [];
    if (input === "") {
      errors.push("a search field is required");
    }
    setErrors(errors);
    dispatch(searchASpot(input));
    history.push(`/search`)

}

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = <ProfileButton classname="profile" user={sessionUser} />;
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
      </>
    );
  }
  let upload;
  if (sessionUser) {
    upload = (
      <button className='host-now'>
        <Link to="/upload">Host Now</Link>
      </button>
    );
  }

  let search;
  if (sessionUser) {
    search = (
      <>
      <form onSubmit={handleSubmit}>
      <ul className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
          </ul>
        <input className="samscool" type="text" placeholder="Search" value={input} onChange={(e) => setInput(e.target.value)}></input>
        <button className="nnnn" type="submit">
          <img className="icons" src="https://res.cloudinary.com/dzjkwepju/image/upload/v1636685077/Styckr/1200px-Magnifying_glass_icon.svg_swnjm6.png" alt='whoops that broke'></img>
        </button>
        </form>
      </>
    );
  }

  let sessionhomebutton;
  if (sessionUser) {
    sessionhomebutton = (
      <>
        <img className="sam" src="" alt=""></img>
        <NavLink id="fu" exact to="/home">
          <img className='the-bnb'
            src="https://res.cloudinary.com/dveuedvvm/image/upload/v1637619426/4564414631_yscaof.png"
            alt="whoops that broke"
          ></img>
        </NavLink>
      </>
    );
  } else {
    sessionhomebutton = (
      <>
        <img className="sam" src="" alt=""></img>
        <NavLink id="fu" exact to="/">
          JapanBnB
        </NavLink>
      </>
    );
  }
  let demoButton;
  if (!sessionUser) {
    demoButton = (
      <button
      className='the-demo'
        onClick={() => {
          setCredential("demo@user.io");
          setPassword("password");
          dispatch(
            sessionActions.login({
              credential: "demo@user.io",
              password: "password",
            })
          );
        }}
      >
        DemoUser
      </button>
    );
  } else {
    demoButton = null;
  }
  let signup;
  if (!sessionUser) {
    signup = <SignupFormModal />;
  }
  return (
    <div id="navbar">
      {sessionhomebutton}
      <div id="left">
        <div> {isLoaded} </div>

        <div className="row">
          <div className="giveitaname">
            {search}
          </div>
          {signup}
          {demoButton}
          <div>
            {upload}

            {sessionLinks}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
