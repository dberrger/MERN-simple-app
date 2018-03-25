import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.jsx';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { initBackend } from "./_backend/backend.jsx";
import { store } from "./_backend/redux-store.jsx";
import {BrowserRouter, Route} from 'react-router-dom';
import { history } from "./_backend/history";
import { Router } from 'react-router';


//initBackend();

ReactDOM.render(<Provider store={store}>
                    <Router history={history}>
                        <Route path='/' component={App}/>
                    </Router>
                </Provider>,
                document.getElementById('root'));
