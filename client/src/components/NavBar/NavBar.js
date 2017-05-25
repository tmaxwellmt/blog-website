import React from 'react';
import logo from './myBlog_logo1.svg';
import './styles.css';

const NavBar = () =>
  <header>
    <div className="container">
      <nav>
        <img src={logo} alt="logo" />
        <ul>
          <li><a href="/"> Home </a></li>
          <li><a href="/about"> About </a></li>
          <li><a href="/articles"> Articles </a></li>
          <li><a href="/post"> Post </a></li>
        </ul>
      </nav>
    </div>
  </header>

export default NavBar
