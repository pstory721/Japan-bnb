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

export function SpotPage() {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const singleSpot = useSelector((state) => state.Spot.spots);
  const images = useSelector((state) => state.Spot.images);
  const allReviews = useSelector((state) => state.Review.reviews);

  const handleDelete = (e) => {
    // e.preventDefault();
    dispatch(DeleteASpot(id));
    history.push(`/search`);
  };

  let userCheck;
  singleSpot?.map((spot) => {
    if (sessionUser?.id === spot?.userId) {
      userCheck = (
        <button
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
      otherCheck = <UpdateForm id={spot.userId} />;
    }
  });

  const [showForm, setShowForm] = useState(false);
  const [showForm2, setShowForm2] = useState(false);
  useEffect(() => {
    dispatch(GetSpot(id));
  }, [dispatch]);

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
      <div className="bok">
      <BookingForm id={id} />

        </div>
      <div className="hdf">
        {userCheck}
        <button
              className="e"
              onClick={() =>
                showForm2 === false ? setShowForm2(true) : setShowForm2(false)
              }
              id="splashlinkbuttons"
            >
              Edit
            </button>
            {singleSpot?.map((spot) => (
        showForm2 && <UpdateForm id={spot.userId} />))}
      </div>
      <div>
        <div className="review">
          <ReviewForm id={id} />
        </div>

          <div className="yeah">
          <h1> reviews </h1>
        {allReviews?.map((review) => (
          <div className="all">
            <h2> username </h2>
            <p className="">{review.review}</p>
            <button
              className="x"
              id="splashlinkbuttons"
              onClick={() => {
                dispatch(DeleteAReview(review.id));
                history.push(`/spot-page/${id}`);
              }}
            >
              X
            </button>
            <button
              className="e"
              onClick={() =>
                showForm === false ? setShowForm(true) : setShowForm(false)
              }
              id="splashlinkbuttons"
            >
              Edit
            </button>
            {showForm && <EditForm reviewId={review.id} />}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
