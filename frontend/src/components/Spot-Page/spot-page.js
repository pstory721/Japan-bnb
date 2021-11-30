import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { DeleteASpot, GetSpot } from "../../store/spots";
import { UpdateForm } from "./edit-spot";
import ReviewForm from "./review";
import { DeleteAReview, GetAllReviews } from "../../store/review";
import EditForm from "./edit-review";
import "./spot-page.css";
import { BookingForm } from "./booking";
import { SingleReview } from "./single";

export function SpotPage() {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const singleSpot = useSelector((state) => state.Spot.spots);
  const images = useSelector((state) => state.Spot.images);
  const allReviews = useSelector((state) => state.Review.reviews);
  const [showForm2, setShowForm2] = useState(false);
  const handleDelete = (e) => {
    // e.preventDefault();
    dispatch(DeleteASpot(id));
    history.push(`/search`);
  };

  let userCheck;
  singleSpot?.map((spot) => {
    if (sessionUser?.id === spot?.userId) {
      userCheck = (
        <button className="btn"
          id=""
          onClick={() => {
            handleDelete();
          }}
        >
          Delete spot
        </button>
      );
    }
  });
  let otherCheck;
  singleSpot?.map((spot) => {
    if (sessionUser?.id === spot?.userId) {
      otherCheck = <UpdateForm id={spot.id} />;
    }
  });
  let lastCheck;
  singleSpot?.map((spot) => {
    if (sessionUser?.id === spot?.userId) {
      lastCheck =  <button
      className="e"
      onClick={() =>
        showForm2 === false ? setShowForm2(true) : setShowForm2(false)
      }
      id="splashlinkbuttons"
    >
      Edit
    </button>;
    }
  });


  useEffect(() => {
    dispatch(GetSpot(id));
  }, [dispatch,id]);

  useEffect(() => {
    dispatch(GetAllReviews(id));
  }, [dispatch]);

  return (
    <div className="sillyme">
      <div className="fam">
        {singleSpot?.map((spot) => (
          <img className="true" src={`${spot.image_url}`}></img>
        ))}
        <h1>{singleSpot[0]?.name}</h1>
      </div>
      <div className="out">
        {images?.map((image) => (
          <div className="u">
            <ul>
              <li id="gh">
            <img className="pleg"
              src={image.image_url}
              alt="art"
            ></img>
            </li>
            </ul>
            <br></br>
          </div>
        ))}
      </div>
      <div className="bordah"></div>
      <div className="bok">
      <BookingForm id={id} />
        </div>
        {singleSpot?.map((spot) => (
          <p className="fuckit">{spot.description}</p>
        ))}
        <div> </div>
      <div className="hdf">
        {userCheck}
        {lastCheck}
        {showForm2 && otherCheck }
      </div>
      <div>
        <div className="review">
          <h2> Leave a review </h2>
          <ReviewForm id={id} />
        </div>

          <div className="yeah">
          <h1> reviews </h1>
        {allReviews?.map((review) => (
          <div className="all">
            <h2> username </h2>
            <p className="">{review.review}</p>
            <SingleReview id={review.id} />
          </div>
        ))}

        </div>
      </div>
    </div>
  );
}
