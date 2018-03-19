
import React, { Component } from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import { history } from "../_backend/history.jsx";
import _components   from "../_components/index.js";

import {BrowserRouter,Route,Link,withRouter,Switch} from 'react-router-dom';

import Header from "../_components/Header.jsx";
import Home from "../_components/Home.jsx";

 import '../styles/css/style.css';
 import '../styles/css/bootstrap.css';


export default class App extends Component {

    constructor(props) {
        super(props);
        
    }
    
render() {
    return (
        <div>
            <Header/>
            <div> 
                <Route path="/" exact component={Home} />             
                <Route path="/register" exact component={_components.Register} />
                <Route path="/login" component={_components.Login} />
                <Route path="/cabinet" component={ () =>(localStorage.getItem('user') 
                                                            ?  <_components.Cabinet/> 
                                                            : <div>Unautorised</div>) } />
                <Route path="/home" component={_components.Home} />
               
            </div>
        </div>
    );

}
}




// const mapStateToProps = (state) => {
//   return {
//     // test name 
//     user: state.user,
//     id: state.id
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setName: (name) => {
//       console.log(name);

//       dispatch({
//         type: "SET_NAME",
//         name
//       });
//     },
//     setSurname: (surname) => {
//       dispatch({
//         type: "SET_SURNAME",
//         surname
//       });
//     },
//     setID: (id) => {
//       dispatch({
//         type: "SET_id",
//         id
//       });
//     }
//   }
// }




// export default connect(mapStateToProps, mapDispatchToProps)(App);




// const mapStateToProps = (state) => {
//   return {
//     // test name 
//     user: state.user,
//     id: state.id
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     setName: (name) => {
//       console.log(name);

//       dispatch({
//         type: "SET_NAME",
//         name
//       });
//     },
//     setSurname: (surname) => {
//       dispatch({
//         type: "SET_SURNAME",
//         surname
//       });
//     },
//     setID: (id) => {
//       dispatch({
//         type: "SET_id",
//         id
//       });
//     }
//   }
// }




// export default connect(mapStateToProps, mapDispatchToProps)(App);