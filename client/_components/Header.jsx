import React from 'react';
import { Link, Redirect } from "react-router-dom";
import { userManager } from "../_actions/userManager";
import { connect } from 'react-redux';
import { history } from "../_backend/history";

class Header extends React.Component {
    constructor(props){
      super(props);

      this.logout = this.logout.bind(this);
      this.fetchD = this.fetchD.bind(this);
    }

    logout() {
      userManager.logout()(this.props.dispatch);
      history.push('/');
    }

    fetchD() {
      console.log("fetch")
      const requestOptions = {
        method: 'GET',
        headers: "OK!"
    }
    // 1. Создаём новый объект XMLHttpRequest
var xhr = new XMLHttpRequest();

// 2. Конфигурируем его: GET-запрос на URL 'phones.json'
xhr.open('GET', '/lol', false);

// 3. Отсылаем запрос
xhr.send();

// 4. Если код ответа сервера не 200, то это ошибка
if (xhr.status != 200) {
  // обработать ошибку
  alert( xhr.status + ': ' + xhr.statusText ); // пример вывода: 404: Not Found
} else {
  // вывести результат
  alert( xhr.responseText ); // responseText -- текст ответа.
}
    }

    render() {
      const unauthorizedLogin = <li className="nav-item"> <Link className="nav-link" to="/login">Log in</Link> </li>;
      const unauthorizedRegister = <li className="nav-item"> <Link className="nav-link" to="/register">Register</Link> </li> ;
      console.log(this.props.isLogged);
        return (
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">B-style</Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link"  onClick={()=> {this.fetchD()}}> TEST(ABOUT)</a>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Contact</Link>
                </li>
				<li className="nav-item">
                  <a className="nav-link">|</a>
                </li>
				{/* REWRITE !! */}
                {this.props.isLogged
                 ? 
                  [
				  <li className="nav-item"> <Link className="nav-link" to="/cabinet">Cabinet</Link></li>,
				  <li className="nav-item"  onClick={this.logout}> <Link className="nav-link" to="/">Logout</Link></li>
				  ]
				:  
            	[
                <li className="nav-item"> <Link className="nav-link" to="/login">Log in</Link> </li>,
                <li className="nav-item"> <Link className="nav-link" to="/register">Register</Link> </li>
                ]
                    }
              </ul>
            </div>
          </div>
        </nav>
        );
    }
}



export default Header = connect( state => ({
  isLogged: state.authReducer.isLogged
}))(Header);