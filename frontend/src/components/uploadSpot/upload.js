import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { PostASpot } from "../../store/spots";
import { getKey } from '../../store/map';


export function UploadForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const key = useSelector((state) => state.Maps.key);
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [image_url, setImage_url] = useState("");
  const [errors, setErrors] = useState([]);
  let history = useHistory();


  useEffect(() => {
    if (!key) {
      dispatch(getKey());
    }
  }, [dispatch, key]);

  if (!key) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = [];
    if (name === "") {
      errors.push("Name field is required");
    }
    if (address === "") {
      errors.push("address field is required");
    }
    if (city === "") {
      errors.push("city field is required");
    }
    if (image_url === "") {
      errors.push("Please add a cover photo");
    }
    if (price === 0 || price === null) {
      errors.push("Please add a Price, it cannot be zero");
    }

    setErrors(errors);
    const response = await fetch (`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`)
    const data = await response.json()
    const lat = data.results[0].geometry.location.lat
    const lng = data.results[0].geometry.location.lng
    const payload = {
      userId:sessionUser.id ,
      name,
      address,
      city,
      lat,
      lng,
      price,
      image_url

    };
     await dispatch(PostASpot(payload));
    history.push("/home");
  };

  return (
    <div className='ididit'>
    <div className="idkwhattodo">
      <h1>Create your Venue Below</h1>
      <form className="secondDiv" onSubmit={handleSubmit}>
        <ul className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
        <div className='col-75'>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        </div>
        <div className='col-75'>
        <label>
          Address
          <input
            type="text"
            name="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        </div>
        <div className='col-75'>
        <label>
          Cover Picture
          <input
            type="text"
            name="image"
            value={image_url}
            onChange={(e) => setImage_url(e.target.value)}
          />
        </label>
        </div>
        <div className='col-75'>
        <label>
          City
          <input
            type="text"
            name="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </label>
        </div>
        <div className='col-75'>
        <label>
          Price
          <input
            type="number"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>
        </div>


        <button type="submit" disabled={errors.length > 0}>
          Create
        </button>
      </form>
    </div>
    </div>
  );
}
