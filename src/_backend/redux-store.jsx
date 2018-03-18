import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../_reducers/root-reducer.jsx';
import { profileReducer } from '../_reducers/profileReducer.jsx';
import { avaliableTimesReducer } from '../_reducers/avaliableTimesReducer';
import { historyReducer } from '../_reducers/historyReducer';
import { routerReducer } from "react-router-redux";
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

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
    historyReducer,
    avaliableTimesReducer,
    routing: routerReducer,
    profileReducer,
    rootReducer,
    form: formReducer
    }), {},
    applyMiddleware(logger)
);