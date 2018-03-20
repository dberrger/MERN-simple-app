import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { rootReducer } from '../_reducers/root-reducer.jsx';
import { profileReducer } from '../_reducers/profileReducer.jsx';
import { avaliableTimesReducer } from '../_reducers/avaliableTimesReducer';
import { authReducer } from '../_reducers/authReducer';
import { historyReducer } from '../_reducers/historyReducer';
import { routerReducer } from "react-router-redux";
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const logger = createLogger();

export const store = createStore(
    combineReducers({
        authReducer,
    historyReducer,
    avaliableTimesReducer,
    routing: routerReducer,
    profileReducer,
    rootReducer,
    form: formReducer
    }), {},
    applyMiddleware(logger)
);