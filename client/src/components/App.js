import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Category from './Category';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';

class App extends Component {

  componentDidMount() {
    //Dispatch the fetchCategories action before mounting the component
    this.props.fetchCategories();
  }

  render() {

    const { categories } = this.props;

    return (
      <BrowserRouter>
        <div className="App">

          <div id="menu">
            <ol>
              <Link to="/">
                <li>Home</li>
              </Link>
              {categories && categories.map((category) => (
                <Link to={category.path} key={category.name}>
                  <li>{category.name}</li>
                </Link>
              ))}
            </ol>
          </div>

          <Route exact path="/" component={Home} />

          <Route path="/:category" component={Category} />

        </div>

      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  const { categories } = state;

  return {
    categories: categories.allCategories
  }
};

function mapDispatchToProps(dispatch) {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
