import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import PostList from './PostList';
import { sortBy } from '../utils/helper';

class Home extends Component {

  componentDidMount() {
    //Dispatch the fetchPosts action before mounting the component
    this.props.fetchPosts();
  }

  render() {
    const { posts } = this.props;

    return (
        <PostList title='Home' posts={posts} />
    );
  }
}

function mapStateToProps(state) {
  const { posts, postsOrder } = state;

  return {
    posts: sortBy(posts.allPosts && posts.allPosts.slice(), postsOrder)
  }

};

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);