import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";
import * as sessionActions from "../../store/session";
import "./Navigation.css";
import SignupFormModal from "../SignupFormModal";

function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
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
  let sessionhomebutton;
  if (sessionUser) {

    sessionhomebutton = (
    <>
      <img className="sam"src=""  alt="" ></img>
      <NavLink id='fu' exact to="/home">
        JapanBnB
      </NavLink>
      </>
    );
  } else {
    sessionhomebutton = (
      <>
      <img className="sam" src="" alt="" ></img>
        <NavLink id='fu' exact to="/">
         JapanBnB
        </NavLink>

      </>
    );
  }
  let demoButton;
  if (!sessionUser) {
    demoButton = (
      <button
        onClick={() => {
          setCredential("demo@user.io");
          setPassword("password");
          dispatch(sessionActions.login({ credential:"demo@user.io", password:"password" }));
        }}
      >
        DemoUser
      </button>
    );
  } else {
    demoButton = null;
  }
  let signup;
  if(!sessionUser){
    signup=<NavLink id="nav" to="/signup">
    Sign Up
  </NavLink>
  }
  return (
    <div id="navbar">
      {sessionhomebutton}
      <div id="left">

        <div> {isLoaded} </div>


      <div>
        <SignupFormModal />
        {demoButton}
        <div>{sessionLinks}</div>
      </div>
      </div>
    </div>
  );
}

export default Navigation;
