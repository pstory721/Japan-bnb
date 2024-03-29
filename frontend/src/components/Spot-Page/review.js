import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom';
import { AddAReview } from "../../store/review";
import { useSelector } from "react-redux";
//

function ReviewForm({id}) {
    const sessionUser = useSelector((state) => state.session.user);
    const dispatch = useDispatch()
    const [review, setReview] = useState("")
    const [spotId,setSpotId] = useState(id)
    const [userId,setUserId] = useState(sessionUser.id)
    const [username,setUserName] = useState(sessionUser.username)
    const [errors, setErrors] = useState([]);
    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = [];
        if (review === "") {
          errors.push("review is required");
        }
        setErrors(errors);
        let payload = {review, userId, username,spotId}
        dispatch(AddAReview(payload))

        history.push(`/spot-page/${id}`)

    }

    return (
        <form className="CommentForm" onSubmit={handleSubmit}>
            <ul className="errors">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
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


export default ReviewForm;
