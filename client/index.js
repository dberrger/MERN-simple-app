import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { initBackend } from "./_helpers/backend";
import { store } from "./_helpers/redux-store";
import {BrowserRouter, Route} from 'react-router-dom';
import { history } from "./_helpers/history";
import { Router } from 'react-router';


//initBackend();

ReactDOM.render(<Provider store={store}>
                    <Router history={history}>
                        <Route path='/' component={App}/>
                    </Router>
                </Provider>,
                document.getElementById('root'));
