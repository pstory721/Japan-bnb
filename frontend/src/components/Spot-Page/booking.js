import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PostABooking } from "../../store/spots";
import { getKey } from "../../store/map";

export function BookingForm({ id }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [start_date, setStartDate] = useState("");
  const [end_date, setEndDate] = useState("");
  const [userId, setUserId] = useState(sessionUser.id);
  const [spotId, setSpotId] = useState(id);
  const [errors, setErrors] = useState([]);
  let history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = [];
    if (start_date > end_date) {
      errors.push("start date cannot be after end date");
    }
    if (end_date < start_date) {
      errors.push("end date cannot be before start date");
    }

    setErrors(errors);
    const payload = {
      userId,
      spotId,
      start_date,
      end_date,
    };
    await dispatch(PostABooking(payload));
    history.push("/search");
  };

  return (
    <div className="ididit">
      <div className="idkwhattodo">
        <h1>Book Now</h1>
        <form className="secondDiv" onSubmit={handleSubmit}>
          <ul className="errors">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
          <div className="col-75">
            <label>
              Start Date
              <input
                type="date"
                name="start_date"
                value={start_date}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </label>
          </div>
          <div className="col-75">
            <label>
              End Date
              <input
                type="date"
                name="end_date"
                value={end_date}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </label>
          </div>
          <button type="submit" disabled={errors.length > 0}>
            Book
          </button>
        </form>
      </div>
    </div>
  );
}
