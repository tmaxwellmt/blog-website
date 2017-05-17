import React, { Component } from 'react';
import {container, logo, navbar} from './App.css';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div className={container}>
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}

export default App;
