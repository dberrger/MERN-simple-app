import React from 'react';
import { Link } from "react-router-dom";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute.jsx";
import Calendar from "./Calendar.jsx";

class Header extends React.Component {
    constructor(props){
      super(props);

    }



    render() {
        return (
            <header >
              {/* <PrivateRoute/> */}
              {/* <Calendar/> */}
            <div className="top-header" id="home">
              <div className="container">
                <div className="col-md-8 col-sm-8 col-xs-8 top-left">
                  <p><i className="fa fa-map-marker" aria-hidden="true"></i> 11/665 Postal street, Park avenue,USA</p>
                </div>
                <div className="col-md-4 col-sm-4 col-xs-4 top-right">
                  <Link to="/register" className="sign-in" onclick="" data-toggle="modal" data-target="#myModal1"><span></span> Sign In</Link>
                  {/* <a href="#" className="cabinet" style={{display:none}} onclick="mycabinet()"><span></span> CABINET MINISTRA</a> */}
                  {/* <a href="#" className="log-out" style={{display:none}} onclick="logout()"><span></span>log-out</a> */}
                  <Link to="/login"className="sign-up"   data-toggle="modal" data-target="#myModal2"><span></span> Sign Up</Link>
                </div>
                <div className="clearfix"></div>
              </div>
            </div>
            </header> 
        );
    }
}

export default Header;