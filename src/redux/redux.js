import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from './usersReducer';
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    users: usersReducer,
    user: userReducer,
    post: postReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;