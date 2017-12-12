import React, { Component } from 'react';
import '../styles/App.css';
import Home from './Home';
import Category from './Category';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <Category />
      </div>
    );
  }
}

export default App;
