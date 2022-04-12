import { combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducer from "./reducers/app";

const reducers = combineReducers({
  app: appReducer,
});
const middleware = composeWithDevTools();
const store = createStore(reducers, middleware);

export default store;
