import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';

class Category extends Component {

    componentDidMount(){
        this.props.fetchPosts();
    }

    render(){

        const {category} = this.props.match.params;
        
        return (
            <div>
                <h1>{category}</h1>
            </div>
        );
    }

}

function mapStateToProps(state){
    const{ posts } = state;
    
    return{
       posts: posts.allPosts
    } 
}

function mapDispatchToProps(dispatch){
    return {
        fetchPosts: () => dispatch(fetchPosts('redux')),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);