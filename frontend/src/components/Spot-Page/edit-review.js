import React, { useState } from "react";
import { useDispatch,useSelector } from "react-redux";
import { useHistory, useParams } from 'react-router-dom';
import {UpdateAReview} from "../../store/review"
//
function EditForm({reviewId}){
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();
    let {id} = useParams()
    const [review, setReview] = useState("")
    const [spotId,setSpotId] = useState(id)
    const [userId,setUserId] = useState(sessionUser.id)
    const handleSubmit = (e) => {
        e.preventDefault();
        let payload = {review, userId,spotId}
        dispatch(UpdateAReview(payload, reviewId))

        history.push(`/spot-page/${id}`);
    }

    return (
        <form className="CommentForm" onSubmit={handleSubmit}>
        <label className="noteForms">
        <textarea
                id='comment'
                type="textarea"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                placeholder="Your Review here"
        />
        </label>
        <button id="submit" type="submit">Submit</button>
    </form>
    )
}

export default EditForm;
