import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetBookings } from '../../store/spots';
import {GetAllReviews} from '../../store/review'
import './user.css';

function User() {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.session.user.id);
  const sessionUser = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => state.Spot.bookings);
  const reviews = useSelector((state) => state.Review.reviews)

    useEffect(() => {
    dispatch(GetBookings());
  }, [dispatch]);
  useEffect(() => {
    dispatch(GetAllReviews(id));
  }, [dispatch]);


  return (
   <div >
      <div>
        <h1 className='username'>{sessionUser.username}</h1>
      </div>
      <div className='all-user'>
      <div className="">
        <h2> Your Bookings </h2>
        <ul>
        {bookings?.map((booking) =>(
          <li className="bruh"> {booking?.Spot?.address} </li>
        ))}
        </ul>
      </div>
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
