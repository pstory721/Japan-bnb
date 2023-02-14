import { csrfFetch } from "./csrf";
const GET_SPOTS = "search/getSpots";

const searchSpots = (spots) => ({
  type: GET_SPOTS,
    spots,
});
//
export const searchASpot = (input) => async (dispatch) => {
  const response = await csrfFetch("/api/search", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({input}),
  });
  if (response.ok) {
    const spots = await response.json();
    dispatch(searchSpots(spots));
  }
}

const initialState = { spots:[]};
const search = (state = initialState, action) => {
    let newState;
  switch (action.type) {
    case GET_SPOTS:
        newState = Object.assign({}, state);
        newState.spots = [action.spots]
        return newState;
    default:
      return state;
  }
};

export default search;
