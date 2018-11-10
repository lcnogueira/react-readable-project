import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import PostList from '../components/PostList';
import { sortBy } from '../utils/helper';

class Home extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  };

  render() {
    const { posts } = this.props;

    return (
      <PostList title='Home' posts={posts} />
    );
  };
};

const mapStateToProps = ({ posts, postsOrder }) => ({ posts: sortBy(posts && posts.slice(), postsOrder) });

const mapDispatchToProps = (dispatch) => ({
  fetchPosts() { dispatch(fetchPosts()); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);