import React from 'react';
import { Link } from 'react-router';
import logo from './myBlog_logo1.svg';

const NavBar = () =>
  <div className="">
    <nav className="navbar">
      <img className="logo" src={logo} alt="logo" />
      <ul>
        <Link className ="active" activeClassName="active-link" to="/home"> Home </Link>
        <Link className ="active" activeClassName="active-link" to="/about"> About </Link>
        <Link className ="active" activeClassName="active-link" to="/articles"> Blog </Link>
      </ul>
    </nav>
  </div>

export default NavBar
