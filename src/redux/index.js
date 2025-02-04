import rootReducer from "./reducers";
import {compose, createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "@redux-devtools/extension";
import {thunk} from "redux-thunk";


const composeFunc = process.env.NODE_ENV === 'development' ? composeWithDevTools : compose;
const composeEnhancers = composeFunc(applyMiddleware(thunk));


const initialState = {};


const store = createStore(rootReducer(), initialState, composeEnhancers);


export default store;

