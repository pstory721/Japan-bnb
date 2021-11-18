import React, { useEffect,useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Redirect  } from "react-router-dom";
import { DeleteASpot, GetSpot } from "../../store/spots";
import {UpdateForm} from './edit-spot';
import ReviewForm from './review'
import { DeleteAReview, GetAllReviews } from "../../store/review";
import EditForm from "./edit-review";


export function SpotPage() {
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const singleSpot = useSelector((state) => state.Spot.spots);
  const images = useSelector((state) => state.Spot.images);
  const allReviews = useSelector((state) => state.Review.reviews)

  const handleDelete = (e)=> {
    // e.preventDefault();
    dispatch(DeleteASpot(id))
      history.push(`/search`)
  }

  let userCheck;
  if (sessionUser.id === singleSpot?.userId) {
    userCheck = <button
    id=""
    onClick={() => {
      handleDelete()
    }}
  >
    Delete Song
  </button>
  }
  let otherCheck;
  if (sessionUser.id === singleSpot?.user_id) {
    otherCheck = <UpdateForm id={singleSpot.id}/>
  }

  const [showForm, setShowForm] = useState(false);



  useEffect(() => {
    dispatch(GetSpot(id));
  }, [dispatch]);

  useEffect(() => {
    dispatch(GetAllReviews(id));
  }, [dispatch]);


  return (
    <div className=''>
        <div className=''>
          {images.map((image) => (
            <div>
            <img src={image.image_url} width='200px' height='200px' alt='art'></img><br></br>
            </div>))}
            {singleSpot.name}
            {userCheck}
            {otherCheck}
            <ReviewForm id={id}/>
        </div>
        <div>
          {allReviews?.map((review) =>
            <div className=''>
              <p className="">{review.review}</p>
              <button className='x' id="splashlinkbuttons" onClick={() => {
                dispatch(DeleteAReview(review.id));
                history.push(`/song-page/${singleSpot.id}`)
                }}>
                X
              </button>
              <button className='e' onClick={() => showForm === false ? setShowForm(true) : setShowForm(false)} id="splashlinkbuttons">
                Edit
              </button>
          {showForm && (<EditForm id={review.id} />)}
        </div>)}
        </div>
    </div>
  )}
