const BUNCHES_STUFF = 'session/ShowStuff';

const ShowStuff = (Stuff) => {
    return {
      type: BUNCHES_STUFF,
       payload:Stuff
    };
  };
//

export const GetStuff = () => async (dispatch) => {
  const response = await fetch(`/api/home`);

  if (response.ok) {
    const Stuff = await response.json();
    dispatch(ShowStuff(Stuff));
  }
};const initialState = { spots:[] };
const HomeReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
      case BUNCHES_STUFF:
        newState = Object.assign({}, state);
        newState.spots = action.payload.spots
        return newState
        default:
        return state;
    }
  };
export default HomeReducer
