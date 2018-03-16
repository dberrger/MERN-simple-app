import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// function lol() {
//     return localStorage.getItem('user') ? <div> OPEN</div> : <div> SECRET </div>;
// }
export const PrivateRoute = () => (
    <Route  path="/lol" component={ () =>(localStorage.getItem('user') ? <div> OPEN</div> : <div> SECRET </div>) } />
)