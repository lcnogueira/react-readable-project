import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class Home extends Component {

  componentDidMount(){
    //Dispatch the fetchPosts action before mounting the component
    this.props.fetchPosts();
  }

  render() {
    const{ posts } = this.props;

    return (
      <div>
        <h1>Home</h1>
      </div>
    );
  }
}

function mapStateToProps(state){
  const{ posts } = state;

  return{
    posts: posts.allPosts
  } 

};

function mapDispatchToProps(dispatch){
  return {
    fetchPosts: () => dispatch(fetchPosts()),
  }
};

export default connect(mapStateToProps,mapDispatchToProps)(Home);