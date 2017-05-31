import React from 'react';
import {logo, container, header, nav} from './styles.css';
import Logo from './logo.svg';

const NavBar = () =>
  <header className={header}>
      <img src={Logo} alt="logo" />
    <nav className={nav}>
      <ul>
        <li><a href="/"> Home </a></li>
        <li><a href="/about"> About </a></li>
        <li><a href="/articles"> Articles </a></li>
        <li><a href="/post"> Post </a></li>
      </ul>
    </nav>
  </header>

export default NavBar
