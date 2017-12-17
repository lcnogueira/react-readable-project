import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Category from './Category';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import { Container, Menu, Icon } from 'semantic-ui-react';
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

        <Container >

          <Menu inverted={true} fluid={true} size="massive" stackable={true}>
            <Menu.Item>
              <Icon name='home'/>
              <Link to="/">
                Home
              </Link>
            </Menu.Item>
            {categories && categories.map((category) => (
              <Menu.Item key={category.name}>
                <Link to={category.path}>
                  {capitalize(category.name)}
                </Link>
              </Menu.Item>
              ))}
          </Menu>
            
          <Route exact path="/" component={Home} />

          <Route path="/:category" component={Category} />

        </Container>

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
