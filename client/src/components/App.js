import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Category from './Category';
import Menu from './Menu';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Menu />

        <Route exact path="/" component={Home} />

        <Route path="/category" component={Category} />

      </div>
    );
  }
}

export default App;
