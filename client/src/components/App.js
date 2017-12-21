import React, { Component } from 'react';
import { Route, BrowserRouter, Link } from 'react-router-dom';
import '../styles/App.css';
import Home from './Home';
import Category from './Category';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import { capitalize } from '../utils/helper';
import { AppBar, MenuItem, Drawer } from 'material-ui';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentFilterList from 'material-ui/svg-icons/content/filter-list';

class App extends Component {

  constructor() {
    super();
    this.state = {
      open: false,
    }
  }

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  }

  componentDidMount() {
    //If there is no categories props, dispatch the fetchCategories action before mounting the component
    if (!this.props.categories)
      this.props.fetchCategories();
  }

  render() {

    const { categories } = this.props;

    return (
      <BrowserRouter>

        <div>

          <AppBar
            title="Readable"
            onLeftIconButtonClick={this.toggleMenu}
          />

          <Drawer open={this.state.open} docked={false} onRequestChange={(open) => this.setState({ open })}>
            <AppBar title='Menu' />
            <MenuItem leftIcon={<ActionHome />} onClick={this.toggleMenu} containerElement={<Link to="/" />} primaryText="Home" />
            {categories && categories.map((category) => (
              <MenuItem
                leftIcon={<ContentFilterList />}
                key={category.name}
                onClick={this.toggleMenu}
                containerElement={<Link to={category.path} />}
                primaryText={capitalize(category.name)}
              />
            ))}
          </Drawer>

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
