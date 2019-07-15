import { createStore, applyMiddleware } from "redux";
import { getDataReducer } from "./reducers/postreducers";
import { combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
const middleware = [ReduxThunk];
const rootReducer = combineReducers({
  getDataReducer: getDataReducer
});

export const store = createStore(rootReducer, applyMiddleware(...middleware));
