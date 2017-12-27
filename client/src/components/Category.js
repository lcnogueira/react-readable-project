import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { fetchPostsByCategory } from '../actions';
import { fetchPosts } from '../actions';
import PostList from './PostList';
import { capitalize, sortBy } from '../utils/helper';

class Category extends Component {

    componentDidMount() {
        // const { category } = this.props.match.params;
        this.props.fetchPosts();
        // this.props.fetchPostsByCategory(category);
    }

    //Compare if the previous category is different from the nextCategory. If it is, fetch posts by category
    componentWillReceiveProps(nextProps) {
        const { category } = this.props.match.params;
        const nextCategory = nextProps.match.params.category;
        if (category !== nextCategory)
            this.props.fetchPosts();
            // this.props.fetchPostsByCategory(nextCategory);

    }

    render() {

        const { category } = this.props.match.params;
        const { posts } = this.props;

        return (
            <div>
                <PostList title={capitalize(category)} posts={posts} />
            </div>
        );
    }

}

function mapStateToProps(state, ownProps) {
    const { posts, postsOrder } = state;
    const { category } = ownProps.match.params;

    return {
        posts: sortBy(posts.allPosts && posts.allPosts.filter(post => post.category === category), postsOrder),
        // posts: posts.allPosts && posts.allPosts.filter(post => post.category === category)
    };
};

function mapDispatchToProps(dispatch) {
    return {
        // fetchPostsByCategory: (category) => dispatch(fetchPostsByCategory(category)),  
        fetchPosts: () => dispatch(fetchPosts()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Category);
