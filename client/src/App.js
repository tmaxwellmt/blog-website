import React, { Component } from 'react';
import {container} from './App.css';
import NavBar from './NavBar';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
      <div className={container}>
        {this.props.children}
      </div>
    );
  }
}

export default App;
