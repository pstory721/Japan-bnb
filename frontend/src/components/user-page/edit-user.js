import React, { useState } from "react";
import { useDispatch,useSelector} from "react-redux";
import { editSignup } from "../../store/session";
import '../SignupFormModal';

function EditSignupFormPage() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.session.user.id);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [picture, setPicture] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");
  const [errors, setErrors] = useState([]);



  const handleSubmit = (e) => {
    e.preventDefault();
    const payload ={
      id,
        username,
        picture,
        bio,
        phone
    }
    dispatch(editSignup(payload))

  };

  return (
    <form className='sign-up-form' onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li className='the-errors' key={idx}>{error}</li>
        ))}
      </ul>
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
          type="textarea"
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
      <button className='signup-button' type="submit">Edit info</button>
    </form>
  );
}

export default EditSignupFormPage;
