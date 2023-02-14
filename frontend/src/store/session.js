import { csrfFetch } from "./csrf.js";

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';
const PUT_USER = 'session/putUser';

const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});
const putUser = (user) => ({
  type:PUT_USER,
  payload: user,
});
//
export const login = ({ credential, password }) => async dispatch => {
  const response = await csrfFetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ credential, password }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const restoreUser = () => async dispatch => {
  const response = await csrfFetch("/api/session");
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};

export const signup = (user) => async (dispatch) => {
  const { username, email, password,picture,phone,bio } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
      picture,
      phone,
      bio,

    }),
  });
  const data = await response.json();
  dispatch(setUser(data.user));
  return response;
};
export const editSignup = (user) => async (dispatch) => {
  const { username,picture,phone,bio,id } = user;
  const response = await csrfFetch("/api/users/patch", {
    method: "PATCH",
    body: JSON.stringify({
      id,
      username,
      picture,
      bio,
      phone
    }),
  });
  const data = await response.json();
  dispatch(putUser(data.user));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE",
  });
  dispatch(removeUser());
  return response;
};

const initialState = { user: null };

function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state, { user: action.payload });
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state, { user: null });
      return newState;
      case PUT_USER:
    newState = Object.assign({}, state);
    newState = Object.assign({}, state, { user: action.payload });
    return newState;
    default:
      return state;
  }
}

export default reducer;
