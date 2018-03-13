import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../_reducers/root-reducer.jsx';
import { routerReducer } from "react-router-redux";
import { combineReducers } from 'redux'


const logger = createLogger();
//TODO CONSTRUNCTRION FOR OBJ
const initStore = {
    username: "default_username",
    password: "default_password",
    email: "default@gmail.com",
    history: [{
        id: "0",
        time: "-",
        place: "somePlacestring"
    }],
    current: []
};

export const store = createStore(
    combineReducers({
    routing: routerReducer,
    rootReducer}), {}   ,
    applyMiddleware(logger)
);