import React, { Component } from 'react';
import { Route, BrowserRouter, Link, Switch } from 'react-router-dom';
import '../styles/App.css';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions';
import { capitalize } from '../utils/helper';
import { AppBar, MenuItem, Drawer } from 'material-ui';
import ActionHome from 'material-ui/svg-icons/action/home';
import ContentFilterList from 'material-ui/svg-icons/content/filter-list';
import Home from './Home';
import Category from './Category';
import PostDetails from './PostDetails';
import PostForm from './PostForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  toggleMenu = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    this.props.fetchCategories();
  }

  render() {
    const { categories } = this.props;

    return (
      <BrowserRouter>
        <div>
          <AppBar title="Readable" onLeftIconButtonClick={this.toggleMenu} />

          <Drawer
            open={this.state.open}
            docked={false}
            onRequestChange={open => this.setState({ open })}
          >
            <AppBar title="Menu" />
            <MenuItem
              leftIcon={<ActionHome />}
              onClick={this.toggleMenu}
              containerElement={<Link to="/" />}
              primaryText="Home"
            />
            {categories &&
              categories.map(category => (
                <MenuItem
                  leftIcon={<ContentFilterList />}
                  key={category.name}
                  onClick={this.toggleMenu}
                  containerElement={<Link to={`/${category.path}`} />}
                  primaryText={capitalize(category.name)}
                />
              ))}
          </Drawer>

          <main>
            <Route exact path="/" component={Home} />
            <Route exact path="/:category" component={Category} />

            <Switch>
              <Route path="/post/new" component={PostForm} />
              <Route path="/post/edit/:postId" component={PostForm} />
              <Route path="/:category/:postId" component={PostDetails} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = ({ categories }) => ({ categories });

const mapDispatchToProps = dispatch => ({
  fetchCategories() {
    dispatch(fetchCategories());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
