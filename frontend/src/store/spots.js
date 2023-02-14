import { csrfFetch } from "./csrf";
const SPOT_FILL = "session/ShowSpot";
const BOOKING_FILL = "session/ShowBooking";
const DELETE_SPOT = "session/DeleteSpot";
const UPDATE_SPOT = "session/UpdateSpot";
const BOOK_SPOT = "session/BookSpot";
const ADD_SPOT = "session/AddSpot";
const ShowSpot = (spots ,bookings,images) => {
  return {
    type: SPOT_FILL,
    spots,
    bookings,
    images
  };
};
const ShowBookings = (bookings) => {
  return {
    type: BOOKING_FILL,
    bookings

  };
};
const DeleteSpot = (spots) => {
  return {
    type: DELETE_SPOT,
    spots
  };
};
const UpdateSpot = (spots) => {
  return {
    type: UPDATE_SPOT,
    spots,
  };
};
const AddBooking = (booking) => {
  return {
    type: BOOK_SPOT,
    booking,
  };
};
const AddSpot = (Spot) => {
  return {
    type: ADD_SPOT,
    Spot,
  };
}

export const PostABooking = (input) => async (dispatch) => {
  const response = await csrfFetch(`/api/booking`, {
    method: "POST",
    body: JSON.stringify(input),
  });
  if (response.ok) {
    const { newBooking } = await response.json();
    dispatch(AddBooking(newBooking));
  }
};
export const PostASpot = (input) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots`, {
    method: "POST",
    body: JSON.stringify(input),
  });
  if (response.ok) {
    const { newSpot } = await response.json();
    dispatch(AddSpot(newSpot));
  }
};

export const GetSpot = (id) => async (dispatch) => {
  const response = await fetch(`/api/spots/${id}`);
  if (response.ok) {
    const { spots,bookings,images  } = await response.json();
    dispatch(ShowSpot(spots,bookings,images));
  }
};
export const GetBookings = () => async (dispatch) => {
  const response = await fetch(`/api/booking`);
  if (response.ok) {
    const { bookings  } = await response.json();
    dispatch(ShowBookings(bookings));
  }
};
export const DeleteASpot = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
      const id = await response.json()
    dispatch(DeleteSpot(id));
  }
};

export const UpdateASpot = (input, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots/${id}`, {
    method: "PUT",
    body: JSON.stringify(input),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    const { UpdatedSpot } = await response.json();
    dispatch(UpdateSpot(UpdatedSpot));
  }
};

const initialState = { spots:[],bookings:[],images:[]};
const SingleSpotReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SPOT_FILL:
      newState = Object.assign({}, state);
      newState.spots = [action.spots];
      newState.images = action.images;
      newState.bookings=action.bookings;
      return newState;
    case BOOKING_FILL:
    newState = Object.assign({}, state);
    newState.bookings =  action.bookings;
    return newState;
    case DELETE_SPOT:
        newState = Object.assign({}, state);
        newState.spots = state.spots?.filter(({ id }) => id !== action.spots);
        return newState;
    case UPDATE_SPOT:
        newState = Object.assign({}, state);
        const index = state.spots?.findIndex(c => c.id === action.spots.id);
        newState.spots = [...state.spots.slice(0, index), action.spots, ...state.spots.slice(index + 1)];
        return newState;
    case BOOK_SPOT:
      newState = {...state,bookings:[...state.bookings]}
      newState.bookings.push(action.bookings)
      return newState
      case ADD_SPOT:
      newState = {...state,spots:[...state.spots]}
      newState.spots.unshift(action.spots)
      return newState
    default:
      return state;
  }
};
//
export default SingleSpotReducer;
