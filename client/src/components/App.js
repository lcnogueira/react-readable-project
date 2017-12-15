import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Category from './Category';
import Menu from './Menu';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';

class App extends Component {

  componentDidMount(){
    //Dispatch the fetchCategories action before mounting the component
    this.props.fetchCategories();
  }

  render() {

    const {categories} = this.props;

    return (
      <div className="App">

        <Menu />

        <Route exact path="/" component={Home} />

        <Route path="/:category" component={Category} />

      </div>
    );
  }
}

function mapStateToProps (state) {
    const {categories} = state;

    return {
      categories: categories.all
    }
}

function mapDispatchToProps(dispatch){
  return {
    fetchCategories: () => dispatch(fetchCategories()),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
