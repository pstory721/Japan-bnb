import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";
import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [picture, setPicture] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(
        sessionActions.signup({ email, username, password })
      ).catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
    }
    return setErrors([
      "Confirm Password field must be the same as the Password field",
    ]);
  };

  return (
    <form className='sign-up-form' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li className='the-errors' key={idx}>{error}</li>
        ))}
      </ul>
      <label className='sign-cred'>
        Email <br/>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label className='sign-cred'>
        Username <br/>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label className='sign-cred'>
        bio <br/>
        <input
          type="text"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
      </label>
      <label className='sign-cred'>
        picture <br/>
        <input
          type="text"
          value={picture}
          onChange={(e) => setPicture(e.target.value)}
          required
        />
      </label>
      <label className='sign-cred'>
        phone <br/>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </label>
      <label className='sign-cred'>
        Password <br/>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label className='sign-cred'>
        Confirm Password <br/>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </label>
      <button className='signup-button' type="submit">Sign Up</button>
    </form>
  );
}

export default SignupFormPage;
