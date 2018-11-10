import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPostsByCategory } from '../actions';
import PostList from '../components/PostList';
import { capitalize, sortBy } from '../utils/helper';

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
            <div>
                <PostList title={capitalize(category)} posts={posts} />
            </div>
        );
    };
};

const mapStateToProps = ({ posts, postsOrder }) => ({ posts: sortBy(posts && posts.slice(), postsOrder) });

const mapDispatchToProps = (dispatch) => ({
    fetchPostsByCategory(category) { dispatch(fetchPostsByCategory(category)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
