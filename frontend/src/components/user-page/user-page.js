import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { GetBookings } from '../../store/spots';
import './user.css';

function User() {




  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const bookings = useSelector((state) => state.Spot.bookings);

    useEffect(() => {
    dispatch(GetBookings());
  }, [dispatch]);


  return (
   <div className='all-user'>
      <div>
        <h2 className='username'>{sessionUser.username}</h2>
      </div>
      <div className="">
        <ul>
        {bookings?.map((booking) =>(
          <li className="bruh"> {booking?.Spot?.name} </li>
        ))}

        </ul>


      </div>




   </div>
  );
}
export default User;
