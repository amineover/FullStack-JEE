import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import styled from 'styled-components';
import logo from '../logo.png';
const Styles = styled.div`
  .navbar { background-color: #2196F3!important; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .navbar-brand {
    font-size: 1.4em; 
    color: black;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;
class NavigationBar extends React.Component {

  constructor(props) {
    super(props);
  }
  logout(event){
    if(window.localStorage.getItem("token")){
      window.localStorage.removeItem("token") 
          window.localStorage.removeItem("logedin") 
      window.location.reload();
   }    
    
}
  render() {
    const isLoggedin = this.props.isLoggedin
    console.log("isLoggedin   "+isLoggedin)
    return (
  <Styles>
    <Navbar expand="lg">
       <Navbar.Brand href="/" className="text-center" style={{color:"#FFFF"}} >Gestion des Salaries</Navbar.Brand>
      <button   id="logout" className="btn btn-link" style={{color:"#FFFF"}} onClick={(event) =>this.logout(event)}><span className="fa fa-user" ></span>  Se déconnecter</button>
 
    </Navbar>
  </Styles>
)}}
export default NavigationBar;