import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import PostList from './PostList';
import { Header, Container } from 'semantic-ui-react';

class Home extends Component {

  componentDidMount() {
    //Dispatch the fetchPosts action before mounting the component
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    return (
      <Container>
        <Header as="h1" textAlign="center">Home</Header>
        <PostList posts={posts} />
      </Container>
    );
  }
}

function mapStateToProps(state) {
  const { posts } = state;

  return {
    posts: posts.allPosts
  }

};

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);