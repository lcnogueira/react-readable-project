import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Category from './Category';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import { capitalize } from '../utils/helper';


class App extends Component {

  componentDidMount() {
    //If there is no categories props, dispatch the fetchCategories action before mounting the component
    if(!this.props.categories)
      this.props.fetchCategories();
  }

  render() {

    const { categories } = this.props;

    return (
      <BrowserRouter>

        <div id='container'>

          <nav>
            <ol style={{listStyle: 'none'}}>
              <li>
                <Link to="/">
                  Home
                </Link>
              </li>
              {categories && categories.map((category) => (
                <li key={category.name}>
                  <Link to={category.path}>
                    {capitalize(category.name)}
                  </Link>
                </li>
              ))}
            </ol>
            
          <Route exact path="/" component={Home} />

          <Route path="/:category" component={Category} />

        </nav>
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
