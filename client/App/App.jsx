
import React, { Component } from 'react';
import Redux from 'redux';
import { connect } from 'react-redux';
import { history } from "../_helpers/history";
import _components   from "../_components/index";

import {BrowserRouter,Route,Link,withRouter,Switch} from 'react-router-dom';

import Header from "../_components/Header";
import Home from "../_components/Home";

 import '../styles/css/style.css';
 import '../styles/css/bootstrap.css';
 import '../styles/css/sb-admin.css'
 import "../styles/css/font-awesome.min.css";
import { userActions } from '../_actions/userActions';


export default class App extends Component {

    constructor(props) {
        super(props);   
        // this.isLogged = this.isLogged.bind(this);    
    }
    
render() {
    return (
        <div>
            <Header/>
            <div>
                <Switch> 
                <Route path="/" exact component={Home} />             
                <Route path="/register" exact component={ () =>(localStorage.getItem('user') 
                                                            ? <_components.Home/> 
                                                            : <_components.Register/>) } />
                <Route path="/login" component={ () =>(localStorage.getItem('user') 
                                                            ? <_components.Home/>
                                                            : <_components.Login/>) } />
                <Route path="/cabinet" component={ () =>(localStorage.getItem('user') 
                                                            ?  <_components.Cabinet/> 
                                                            : <div>Unautorised</div>) }/>
                <Route path="/home" component={_components.Home} />
                <Route render={()=>(<h1>404 Not Found</h1>)} />
               </Switch>
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