import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBookings } from "../../store/spots";
import { GetAllReviews } from "../../store/review";
import "./user.css";

function User() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.session.user.id);
  const sessionUser = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => state.Spot.bookings);
  const reviews = useSelector((state) => state.Review.reviews);
  const [bio, setBio] = useState("");

  useEffect(() => {
    dispatch(GetBookings());
  }, [dispatch]);
  useEffect(() => {
    dispatch(GetAllReviews(id));
  }, [dispatch]);

  return (
    <div className="container5">
      {
        <div className="col-md" key={sessionUser.id}>
          <div className="card">
            <div className="card-body">
              <div className="avatar">
                <img
                  src={sessionUser.picture}
                  className="card-img-top"
                  alt=""
                />
              </div>
              <h5 className="card-title">{sessionUser.username}</h5>
              <p className="card-text">
                {sessionUser.email}
                <br />
                <span className="phone">{sessionUser.phone}</span>
              </p>
              <p>{sessionUser.bio}</p>
            </div>
          </div>
        </div>
      }
      <div className="marginduh">
        <h2> Your Bookings </h2>
        <ul>
          {bookings?.map((booking) => (
            <li className="bruh"> {booking?.Spot?.address} </li>
          ))}
        </ul>
      </div>
      <div className="all-user">
        <div>
          <h2> Your Reviews </h2>
          {reviews?.map((review) => (
            <div>
              <ul>
                <li className="bruh"> {review?.review} </li>
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default User;
