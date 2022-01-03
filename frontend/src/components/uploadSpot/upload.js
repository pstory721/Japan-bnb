import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PostASpot } from "../../store/spots";
import { getKey } from "../../store/map";
import "./upload.css";

export function UploadForm() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const key = useSelector((state) => state.Maps.key);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [image_url, setImage_url] = useState("");
  const [imageurlone, setImageurlone] = useState("");
  const [imageurltwo, setImageurltwo] = useState("");
  const [imageurlthree, setImageurlthree] = useState("");
  const [imageurlfour, setImageurlfour] = useState("");
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
    if (imageurlone === "") {
      errors.push("Please add a image");
    }
    if (imageurltwo === "") {
      errors.push("Please add a image");
    }

    if (imageurlthree === "") {
      errors.push("Please add a image");
    }

    if (imageurlfour === "") {
      errors.push("Please add a image");
    }


    setErrors(errors);
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${key}`
    );
    const data = await response.json();
    console.log(data);
    const lat = data.results[0].geometry.location.lat;
    const lng = data.results[0].geometry.location.lng;
    const payload = {
      userId: sessionUser.id,
      name,
      description,
      address,
      city,
      lat,
      lng,
      price,
      image_url,
      imageurlone,
      imageurltwo,
      imageurlthree,
      imageurlfour,

    };
    await dispatch(PostASpot(payload));
    history.push("/spots");
  };

  return (
    <div className="upload">
      <h1 className="whateveriwant">Create your Spot Below</h1>
      <form className="secondDiv" onSubmit={handleSubmit}>
        <div className="inner">
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>

          <label className='host-labes'>
            Name
            <br></br>
            <input
              className="input"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className='host-labes'>
            description
            <br></br>
            <input
              className="input"
              type="text"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label className='host-labes'>
            Address
            <br></br>
            <input
              className="input"
              type="text"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </label>

          <label className='host-labes'>
            Cover Picture
            <br></br>
            <input
              className="input"
              type="text"
              name="image"
              value={image_url}
              onChange={(e) => setImage_url(e.target.value)}
            />
          </label>

          <label className='host-labes'>
            City
            <br></br>
            <input
              className="input"
              type="text"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>

          <label className='host-labes'>
            Price
            <br></br>
            <input
            className="input"
              type="number"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>

          <label className='host-labes'>
            Image one
            <br></br>
            <input
              className="input"
              type="text"
              name="image one"
              value={imageurlone}
              onChange={(e) => setImageurlone(e.target.value)}
            />
          </label>
          <label className='host-labes'>
            Image two
            <br></br>
            <input
              className="input"
              type="text"
              name="image two"
              value={imageurltwo}
              onChange={(e) => setImageurltwo(e.target.value)}
            />
          </label>
          <label className='host-labes'>
            Image three
            <br></br>
            <input
              className="input"
              type="text"
              name="image three"
              value={imageurlthree}
              onChange={(e) => setImageurlthree(e.target.value)}
            />
          </label>
          <label className='host-labes'>
            image four
            <br></br>
            <input
              className="input"
              type="text"
              name="image four"
              value={imageurlfour}
              onChange={(e) => setImageurlfour(e.target.value)}
            />
          </label>

          <button className='create-spot' id="submit" type="submit" disabled={errors.length > 0}>
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
