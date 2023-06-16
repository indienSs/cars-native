import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import appReducer from "./reducers";

const rootReducer = combineReducers({appReducer});

export const store = createStore(rootReducer, applyMiddleware(thunk));