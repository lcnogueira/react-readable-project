import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsByCategory } from '../actions';
import PostList from './PostList';
import { capitalize } from '../utils/helper';

class Category extends Component {

    componentDidMount() {
        const { category } = this.props.match.params;
        this.props.fetchPostsByCategory(category);
    }

    //Compare if the previous category is different from the nextCategory. If it is, fetch posts by category
    componentWillReceiveProps(nextProps) {
        const { category } = this.props.match.params;
        const nextCategory = nextProps.match.params.category;
        if (category !== nextCategory)
            this.props.fetchPostsByCategory(nextCategory);

    }

    render() {

        const { category } = this.props.match.params;
        const { posts } = this.props;

        return (
            <PostList subheader={capitalize(category)} posts={posts} />
        );
    }

}

function mapStateToProps(state) {
    const { posts } = state;

    return {
        posts: posts.allPosts
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchPostsByCategory: (category) => dispatch(fetchPostsByCategory(category)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);