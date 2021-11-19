import { csrfFetch } from "./csrf.js";

const POST_REVIEW = "session/PostReviews"
const PUT_REVIEW = "session/PutReviews";
const GET_REVIEWS = "session/GetReviews";
const DELETE_REVIEW = "session/DeleteReviews";

const GetReviews = (reviews) => {
  return {
    type: GET_REVIEWS,
    reviews,
  };
};

const AddReview = (review) => {
  return {
    type:POST_REVIEW,
    review,
  }
}

const UpdateReview = (review) => {
  return {
    type: PUT_REVIEW,
    review,
  };
};

const DeleteReview = (reviews) => {
  return {
    type: DELETE_REVIEW,
    reviews
  };
};

export const UpdateAReview = (input, id) => async (dispatch) => {
  const response = await csrfFetch(`/api/review/${id}`, {
    method:"PUT",
    body: JSON.stringify(input),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    const  {UpdatedReview}  = await response.json();
    dispatch(UpdateReview(UpdatedReview));
  }
}

export const AddAReview= (input) => async (dispatch) => {
  const response = await csrfFetch(`/api/review`, {
    method: "POST",
    body: JSON.stringify(input)
  });

  if (response.ok) {
    const {newReview} = await response.json();
    dispatch(AddReview(newReview));
  }
}

export const GetAllReviews = (id) => async (dispatch) => {
  const response = await fetch(`/api/review/${id}`);

  if (response.ok) {
    const {reviews} = await response.json();
    dispatch(GetReviews(reviews));
  }
};

export const DeleteAReview= (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/review/${id}`, {
    method: "DELETE",
  });
  if (response.ok) {
    dispatch(DeleteReview(id));
  }
};

const initialState = { reviews: [] };
const ReviewReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_REVIEWS:
      newState = Object.assign({}, state);
      newState.reviews = action.reviews;
      return newState;
    case DELETE_REVIEW:
      newState = Object.assign({}, state);
      newState.reviews = state.reviews.filter(({ id }) => id !== action.reviews);
      return newState;
    case PUT_REVIEW:
    newState = Object.assign({}, state);
    const index = state.reviews.findIndex(c => c.id === action.review.id);
    newState.reviews = [...state.reviews.slice(0, index), action.review, ...state.reviews.slice(index + 1)];
    return newState;
    case POST_REVIEW:
        return { ...state, reviews: [...state.reviews, action.review] };
    default:
      return state;
  }
};
export default ReviewReducer;
