import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import HomeReducer from './home';
import SingleSpotReducer from './spots';
import ReviewReducer from './review';
import mapsReducer from './map';
import searchReducer from './search';
const rootReducer = combineReducers({
  session:sessionReducer,
  Home: HomeReducer,
  Spot: SingleSpotReducer,
  Review: ReviewReducer,
  Maps: mapsReducer,
  Search: searchReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};
//
export default configureStore;
