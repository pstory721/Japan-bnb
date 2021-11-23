import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { DeleteASpot, GetSpot } from "../../store/spots";
import { UpdateForm } from "./edit-spot";
import ReviewForm from "./review";
import { DeleteAReview, GetAllReviews } from "../../store/review";
import EditForm from "./edit-review";
import "./spot-page.css"
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
    if (sessionUser.id === spot.userId) {
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

  useEffect(() => {
    dispatch(GetSpot(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetAllReviews(id));
  }, [dispatch]);

  return (
    <div className="sillyme">
      <div className="out">
        {images?.map((image) => (
          <div>
            <img
              src={image.image_url}
              width="200px"
              height="200px"
              alt="art"
            ></img>
            <br></br>
          </div>
        ))}
        {singleSpot?.map((spot) => spot.name)}
      </div>
      <BookingForm id={id} />
      <div>
        {userCheck}
        {otherCheck}
      </div>
      <div>
        <div>
          <ReviewForm id={id} />
        </div>

        {allReviews?.map((review) => (
          <div className="">
            <p className="">{review.review}</p>
            <button
              className="x"
              id="splashlinkbuttons"
              onClick={() => {
                dispatch(DeleteAReview(review.id));
                history.push(`/spot-page/${singleSpot.id}`);
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
  );
}
