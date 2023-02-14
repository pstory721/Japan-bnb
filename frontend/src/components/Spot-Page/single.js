import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { DeleteAReview } from "../../store/review";
import EditForm from "./edit-review";
//
export function SingleReview({ userId,reviewId }) {
  const history = useHistory();
  const {id} = useParams()
  const sessionUser = useSelector((state) => state.session.user);
  const allReviews = useSelector((state) => state.Review.reviews);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  let reviewCheck;
  if (sessionUser?.id === userId) {
    reviewCheck = (
      <>
        <button
          className="x"
          id="splashlinkbuttons"
          onClick={() => {
            dispatch(DeleteAReview(reviewId));
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
        {showForm && <EditForm reviewId={reviewId} />}
      </>
    );
  } else {
    reviewCheck = <div></div>;
  }

  return <div>{reviewCheck}</div>;
}
