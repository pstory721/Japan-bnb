import { csrfFetch } from "./csrf";
const SPOT_FILL = "session/ShowSpot";
const DELETE_SPOT = "session/DeleteSpot";
const UPDATE_SPOT = "session/UpdateSpot";
const BOOK_SPOT = "session/BookSpot";
const ShowSpot = (spot ,bookings,images) => {
  return {
    type: SPOT_FILL,
    spot,
    bookings,
    images
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

export const PostABooking = (input) => async (dispatch) => {
  const response = await csrfFetch(`/api/spots`, {
    method: "POST",
    body: JSON.stringify(input),
  });
  if (response.ok) {
    const { newBooking } = await response.json();
    dispatch(AddBooking(newBooking));
  }
};

export const GetSpot = (id) => async (dispatch) => {
  const response = await fetch(`/api/spots/${id}`);
  if (response.ok) {
    const { spots,bookings,images  } = await response.json();
    dispatch(ShowSpot(spots,bookings,images));
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
  const response = await csrfFetch(`/api/spot/${id}`, {
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
      newState.spots = action.spot;
      newState.bookings = action.bookings;
      newState.images = action.images;
      return newState;
    case DELETE_SPOT:
        newState = Object.assign({}, state);
        newState.spots = state.spots.filter(({ id }) => id !== action.spots);
        return newState;
    case UPDATE_SPOT:
        newState = Object.assign({}, state);
        const index = state.spots.findIndex(c => c.id === action.spots.id);
        newState.spots = [...state.spots.slice(0, index), action.spots, ...state.spots.slice(index + 1)];
        return newState;
    case BOOK_SPOT:
      newState = {...state,bookings:[...state.bookings]}
      newState.bookings.push(action.bookings)
      return newState
    default:
      return state;
  }
};
export default SingleSpotReducer;
