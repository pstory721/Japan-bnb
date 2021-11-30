import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import { DeleteAReview } from "../../store/review";
import EditForm from "./edit-review";

export function SingleReview({ id }) {
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);
  const allReviews = useSelector((state) => state.Review.reviews);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  let reviewCheck;
  if (sessionUser?.id === id) {
    reviewCheck = (
      <>
        <button
          className="x"
          id="splashlinkbuttons"
          onClick={() => {
            dispatch(DeleteAReview(id));
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
        {showForm && <EditForm reviewId={id} />}
      </>
    );
  } else {
    reviewCheck = <div></div>;
  }

  return <div>{reviewCheck}</div>;
}
